import { Request, Response } from 'express';

/* Controllers */
import { BaseController } from '@server/controller';

/* Contracts */
import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

export class GenerateCVController extends BaseController {
    constructor(
        private readonly generateCVUseCase: GenerateCVUseCaseContract
    ) {
        super();
    }

    /**
     * Sends the PDF CV to the client.
     *
     * @param {Response} res - The response object.
     * @param {Uint8Array<ArrayBufferLike>} pdfCVBuffer - The PDF CV buffer.
     * @return {void} This function does not return a value.
     */
    private sendPdfCV(res: Response, pdfCVBuffer: Uint8Array<ArrayBufferLike>): void {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Kristhian_Ferrufino_CV.pdf"');
        res.status(this.httpStatus.OK).send(pdfCVBuffer);
    }

    /**
     * Handles the request to generate the CV.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {void} This function does not return a value.
     */
    public handle(req: Request, res: Response): void {
        this.generateCVUseCase.execute()
            .then((pdfCVBuffer) => this.sendPdfCV(res, pdfCVBuffer))
            .catch((error) => this.jsonResponse.error(res, error));
    }
}