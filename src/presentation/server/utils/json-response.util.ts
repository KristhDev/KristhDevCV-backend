import { Response } from 'express';

/* Constants */
import { httpStatus } from '@application/constants';

/* Contracts */
import { HttpClientError, PDFError } from '@domain/errors';

export interface JsonResponseData {
    message?: string;
    [key: string]: any;
}

export class JsonResponseUtil {

    /**
     * Sends a success response.
     *
     * @param {Response} res - The response object.
     * @param {JsonResponseData} data - The response data.
     * @return {void} This function does not return a value.
     */
    public success(res: Response, data: JsonResponseData): void {
        data = Object.assign(data, { status: httpStatus.OK });
        res = Object.assign(res, { response: data });

        res.status(httpStatus.OK).json(data);
    }

    /**
     * Sends an error response.
     *
     * @param {Response} res - The response object.
     * @param {unknown} error - The error object.
     * @return {void} This function does not return a value.
     */
    public error(res: Response, error: unknown): void {
        let errorData: JsonResponseData = HttpClientError.internalServerError().toJSON();
        let errorDataToLog: JsonResponseData = HttpClientError.internalServerError().toJSON();

        if (error instanceof HttpClientError) {
            errorData = error.toJSON();
            errorDataToLog = error.toJSON();
        }
        else if (error instanceof PDFError) {
            errorDataToLog = { ...error.toJSON(), status: httpStatus.INTERNAL_SERVER_ERROR }
        }

        res = Object.assign(res, { response: errorDataToLog });
        res.status(errorData.status).json(errorData);
    }

    /**
     * Sends a bad request response.
     *
     * @param {Response} res - The response object.
     * @param {string} message - The error message.
     * @return {void} This function does not return a value.
     */
    public badRequest(res: Response, message: string): void {
        const badRequestError = HttpClientError.badRequest(message);
        this.error(res, badRequestError);
    }

    /**
     * Sends a not found response.
     *
     * @param {Response} res - The response object.
     * @return {void} This function does not return a value.
     */
    public notFound(res: Response): void {
        const notFoundError = HttpClientError.notFound();
        this.error(res, notFoundError);
    }

    /**
     * Sends an internal server error response.
     *
     * @param {Response} res - The response object.
     * @return {void} This function does not return a value.
     */
    public internalServerError(res: Response): void {
        const internalServerError = HttpClientError.internalServerError();
        this.error(res, internalServerError);
    }
}
