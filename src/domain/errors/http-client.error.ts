/* Constants */
import { httpStatus } from '@application/constants';

/* Errors */
import { BaseError } from './base.error';

export interface HttpClientErrorJson {
    message: string;
    status: number;
}

export class HttpClientError extends BaseError<HttpClientErrorJson> {
    constructor(message: string, public status: number) {
        super(message);
        this.name = 'HttpClientError';
    }

    public toJSON(): HttpClientErrorJson {
        return {
            message: this.message,
            status: this.status
        }
    }

    /**
     * Returns an HttpClientError with a status code of 400 (Bad Request).
     *
     * @param {string} message The error message.
     * @return {HttpClientError} An instance of HttpClientError with a status code of 400.
     */
    public static badRequest(message: string): HttpClientError {
        return new HttpClientError(message, httpStatus.BAD_REQUEST);
    }

    /**
     * Returns an HttpClientError with a status code of 404 (Not Found).
     *
     * @param {string} [message] The error message. If not provided, a default message is used.
     * @return {HttpClientError} An instance of HttpClientError with a status code of 404.
     */
    public static notFound(message?: string): HttpClientError {
        return new HttpClientError(message || "Sorry, but we couldn't find the requested route.", httpStatus.NOT_FOUND);
    }

    /**
     * Returns an HttpClientError with a status code of 500 (Internal Server Error).
     *
     * @param {string} [message] The error message. If not provided, a default message is used.
     * @return {HttpClientError} An instance of HttpClientError with a status code of 500.
     */
    public static internalServerError(message?: string): HttpClientError {
        return new HttpClientError(message || 'An unexpected error occurred. Please try again later.', httpStatus.INTERNAL_SERVER_ERROR);
    }
}