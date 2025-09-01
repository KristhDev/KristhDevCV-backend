import { BaseError } from './base.error';

export interface PDFErrorJson {
    message: string;
}

export class PDFError extends BaseError<PDFErrorJson> {
    constructor(message: string) {
        super(message);
        this.name = 'PDFError';
    }

    /**
     * Returns a JSON representation of the error.
     *
     * @return {PDFErrorJson} The JSON representation of the error.
     */
    public toJSON(): PDFErrorJson {
        return {
            message: this.message
        }
    }
}