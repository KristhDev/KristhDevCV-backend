import { NextFunction, Request, Response } from 'express';

/* Env */
import { env } from '@config/env';

/* Middlewares */
import { BaseMiddleware } from '@server/middlewares';

export class CheckTokenMiddleware extends BaseMiddleware {
    public constructor() {
        super();
    }

    /**
     * Middleware to check for a valid token in the request headers.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @return {void} This function does not return a value.
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        const tokenHeader = req.headers['x-kristhdevcv-token'];

        if (!tokenHeader) return this.jsonResponse.notFound(res);

        const isValidToken = tokenHeader === env.APP_TOKEN;
        if (!isValidToken) return this.jsonResponse.notFound(res);

        next();
    }
}