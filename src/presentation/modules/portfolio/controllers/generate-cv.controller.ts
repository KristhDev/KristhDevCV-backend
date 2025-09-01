import { Request, Response } from 'express';

import { BaseController } from '@server/controller';

import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

export class GenerateCVController extends BaseController {
    constructor(
        private readonly generateCVUseCase: GenerateCVUseCaseContract
    ) {
        super();
    }

    private sendPdfCV(pdfCVBuffer: Uint8Array<ArrayBufferLike>, res: Response): void {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Kristhian_Ferrufino_CV.pdf"');
        res.send(pdfCVBuffer);
    }

    public handle(req: Request, res: Response): void {
        this.generateCVUseCase.execute()
            .then((pdfCVBuffer) => this.sendPdfCV(pdfCVBuffer, res))
            .catch((error) => this.jsonResponse.error(res, error));
    }
}