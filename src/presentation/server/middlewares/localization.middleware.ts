import { NextFunction, Request, Response } from 'express';

/* Contracts */
import { TimeAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { Locale } from '@infrastructure/interfaces';

/* Middlewares */
import { BaseMiddleware } from './base.middleware';

export class LocalizationMiddleware extends BaseMiddleware {
    public constructor(
        private readonly timeAdapter: TimeAdapterContract
    ) {
        super();
    }

    /**
     * Handles the request to generate the CV.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @return {void} This function does not return a value.
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        const acceptLanguageHeader = req.headers['accept-language'] || 'es';
        this.timeAdapter.setLocale(acceptLanguageHeader as Locale);

        next();
    }
}