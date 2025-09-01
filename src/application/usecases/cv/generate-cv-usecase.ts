/* Contracts */
import { CVFacadeContract } from '@domain/contracts/facades';
import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

export class GenerateCVUseCase implements GenerateCVUseCaseContract {
    public constructor (
        private readonly cvFacade: CVFacadeContract
    ) {}

    public async execute (): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            return await this.cvFacade.generateCV();
        } 
        catch (error) {
            throw error;
        }
    }
}