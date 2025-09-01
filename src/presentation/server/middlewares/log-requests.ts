import { NextFunction, Request, Response, Send } from 'express';

import { LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

export class LogRequests {
    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly userAgentAdapter: UserAgentAdapterContract
    ) {}

    private generateLogMessage(req: Request): string {
        return `${ req.method } ${ req.path }`;
    }

    private onFinish(req: Request, res: Response): void {
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = this.userAgentAdapter.parse(userAgentHeader!);
        const content = (res as any).content;

        const context = {
            ...userAgent,
            message: content.message || 'Message not found',
            status: content.status || 500,
        }

        if (content.status >= 200 && content.status < 300) this.loggerAdapter.info(content.logMessage, context);
        else this.loggerAdapter.error(content.logMessage, context);
    }

    private onSendResponse(body: any, req: Request, res: Response, send: Send): Response {
        let { status, message } = JSON.parse(body);
        const logMessage = this.generateLogMessage(req);

        const content = {
            status,
            message,
            logMessage
        }

        res = Object.assign(res, content);

        return send.call(this, body);
    }

    public handle(req: Request, res: Response, next: NextFunction): void {
        const logMessage = this.generateLogMessage(req);
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = this.userAgentAdapter.parse(userAgentHeader!);

        this.loggerAdapter.info(logMessage, userAgent);

        const originalSend = res.send;
        res.send = (body) => this.onSendResponse(body, req, res, originalSend);
        res.on('finish', () => this.onFinish(req, res));

        next();
    }
}