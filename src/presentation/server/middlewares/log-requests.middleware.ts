import { NextFunction, Request, Response, Send } from 'express';

/* Contracts */
import { LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { UserAgentParsed } from '@infrastructure/interfaces';

/* Middlewares */
import { BaseMiddleware } from './base.middleware';

export class LogRequestsMiddleware extends BaseMiddleware {
    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly userAgentAdapter: UserAgentAdapterContract
    ) {
        super();
    }

    /**
     * Finishes the request.
     *
     * @param {string} logMessage - The log message.
     * @param {UserAgentParsed} userAgent - The user agent.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {void} This function does not return a value.
     */
    private onFinish(logMessage: string, userAgent: UserAgentParsed, req: Request, res: Response): void {
        const content = (res as any).content;
        const response = (res as any).response;

        const respContext = { ...userAgent, ...response }
        const context = { ...userAgent, ...content }

        if (context.status >= this.httpStatus.OK && context.status < 300) this.loggerAdapter.success(logMessage, context);
        else {
            this.loggerAdapter.error(logMessage, respContext);
            this.loggerAdapter.error(logMessage, context);
        }
    }

    /** 
     * Sends the response.
     *
     * @param {any} body - The response body.
     * @param {Response} res - The response object.
     * @param {Send} send - The send function.
     * @return {Response} The response object.
     */
    private onSendResponse(body: any, res: Response, send: Send): Response {
        let parsedBody = JSON.parse(JSON.stringify(body));

        const content = {
            status: parsedBody?.status || res.statusCode,
            message: parsedBody?.message || undefined,
        }

        res = Object.assign(res, content);

        return send.call(res, body);
    }

    /**
     * Handles the request.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @return {void} This function does not return a value.
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        const logMessage = `${ req.method } ${ req.path }`;
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = this.userAgentAdapter.parse(userAgentHeader!);

        this.loggerAdapter.info(logMessage, userAgent);

        const originalSend = res.send;
        res.send = (body) => this.onSendResponse(body, res, originalSend);
        res.on('finish', () => this.onFinish(logMessage, userAgent, req, res));

        next();
    }
}