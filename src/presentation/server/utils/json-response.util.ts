import { Response } from 'express';

import { httpStatus } from '@application/constants';

import { HttpClientError } from '@domain/errors';

export interface JsonResponseData {
    message?: string;
    [key: string]: any;
}

export class JsonResponseUtil {
    public success(res: Response, data: JsonResponseData): void {
        data = Object.assign(data, { status: httpStatus.OK });
        res.status(httpStatus.OK).json(data);
    }

    public error(res: Response, error: unknown): void {
        console.log(error);
        let errorData: JsonResponseData;

        if (error instanceof HttpClientError) errorData = error.toJSON();
        else errorData = HttpClientError.internalServerError().toJSON();

        res.status(errorData.status).json(errorData);
    }

    public badRequest(res: Response, message: string): void {
        const badRequestError = HttpClientError.badRequest(message);
        this.error(res, badRequestError);
    }

    public notFound(res: Response): void {
        const notFoundError = HttpClientError.notFound();
        this.error(res, notFoundError);
    }

    public internalServerError(res: Response): void {
        const internalServerError = HttpClientError.internalServerError();
        this.error(res, internalServerError);
    }
}
