import { Request, Response } from 'express';

import { JsonResponseUtil } from '@server/utils';

export abstract class BaseController {
    protected jsonResponse: JsonResponseUtil;

    public constructor (
    ) {
        this.jsonResponse = new JsonResponseUtil();
    }

    public abstract handle(req: Request, res: Response): void;
}