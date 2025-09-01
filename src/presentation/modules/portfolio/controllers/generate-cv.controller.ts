import { Request, Response } from 'express';

import { BaseController } from '@server/controller';

import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

export class GenerateCVController extends BaseController {
    constructor(
        private readonly generateCVUseCase: GenerateCVUseCaseContract
    ) {
        super();
    }

    public handle(req: Request, res: Response): void {
        this.generateCVUseCase.execute()
            .then(() => this.jsonResponse.success(res, { message: 'CV generated successfully' }))
            .catch((error) => this.jsonResponse.error(res, error));
    }
}