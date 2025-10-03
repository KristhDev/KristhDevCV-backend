import { NextFunction, Request, Response, Send } from 'express';

/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

/* Dtos */
import { RequestContextDto } from '@domain/dtos/logs';

/* Middlewares */
import { BaseMiddleware } from './base.middleware';

export class LogRequestsMiddleware extends BaseMiddleware {
    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract
    ) {
        super();
    }

    /**
     * Finishes the request.
     *
     * @param {RequestContextDto} requestContextDto - The request context DTO.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {void} This function does not return a value.
     */
    private onFinish(requestContextDto: RequestContextDto, req: Request, res: Response): void {
        const content = (res as any).content;
        const response = (res as any).response;

        const respContext = { ...requestContextDto.toJSON(), ...response }
        const context = { ...requestContextDto.toJSON(), ...content }
        const logMessage = `${ requestContextDto.method } ${ requestContextDto.path }`;

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
     * Middleware to log incoming requests and their responses.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @return {void} This function does not return a value.
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        const requestContextDto = RequestContextDto.fromRequest(req);

        this.loggerAdapter.info(`${ requestContextDto.method } ${ requestContextDto.path }`, requestContextDto.toJSON());

        const originalSend = res.send;
        res.send = (body) => this.onSendResponse(body, res, originalSend);
        res.on('finish', () => this.onFinish(requestContextDto, req, res));

        next();
    }
}