import { NextFunction, Request, Response } from 'express';

import { httpStatus } from '@application/constants';
import { JsonResponseUtil } from '@server/utils';

export abstract class BaseMiddleware {
    protected readonly jsonResponse: JsonResponseUtil;
    protected readonly httpStatus = httpStatus;

    public constructor (
    ) {
        this.jsonResponse = new JsonResponseUtil();
    }

    public abstract handle(req: Request, res: Response, next: NextFunction): void;
}