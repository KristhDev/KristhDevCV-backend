import { NextFunction, Request, Response, Send } from 'express';

import { LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

export class LogRequests {
    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly userAgentAdapter: UserAgentAdapterContract
    ) {}

    private onFinish(logMessage: string, req: Request, res: Response): void {
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = this.userAgentAdapter.parse(userAgentHeader!);
        const content = (res as any).content;

        const context = {
            ...userAgent,
            message: content?.message || undefined,
            status: content?.status || res.statusCode,
        }

        if (context.status >= 200 && context.status < 300) this.loggerAdapter.success(logMessage, context);
        else this.loggerAdapter.error(logMessage, context);
    }

    private onSendResponse(body: any, res: Response, send: Send): Response {
        let parsedBody = JSON.parse(JSON.stringify(body));

        const content = {
            status: parsedBody?.status || res.statusCode,
            message: parsedBody?.message || undefined,
        }

        res = Object.assign(res, content);

        return send.call(res, body);
    }

    public handle(req: Request, res: Response, next: NextFunction): void {
        const logMessage = `${ req.method } ${ req.path }`;
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = this.userAgentAdapter.parse(userAgentHeader!);

        this.loggerAdapter.info(logMessage, userAgent);

        const originalSend = res.send;
        res.send = (body) => this.onSendResponse(body, res, originalSend);
        res.on('finish', () => this.onFinish(logMessage, req, res));

        next();
    }
}