/* Contracts */
import { CVFacadeContract } from '@domain/contracts/facades';
import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

export class GenerateCVUseCase implements GenerateCVUseCaseContract {
    public constructor (
        private readonly cvFacade: CVFacadeContract
    ) {}

    /**
     * Generates a CV based on the provided CV data.
     *
     * @return {Promise<Uint8Array<ArrayBufferLike>>} The generated CV as a PDF.
     */
    public async execute (): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            return await this.cvFacade.generateCV();
        } 
        catch (error) {
            throw error;
        }
    }
}