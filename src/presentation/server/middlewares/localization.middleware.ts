import { NextFunction, Request, Response } from 'express';

import { TimeAdapterContract } from '@domain/contracts/adapters';

import { Locale } from '@infrastructure/interfaces';

import { BaseMiddleware } from './base.middleware';

export class LocalizationMiddleware extends BaseMiddleware {
    public constructor(
        private readonly timeAdapter: TimeAdapterContract
    ) {
        super();
    }

    public handle(req: Request, res: Response, next: NextFunction) {
        const acceptLanguageHeader = req.headers['accept-language'] || 'es';
        this.timeAdapter.setLocale(acceptLanguageHeader as Locale);

        next();
    }
}