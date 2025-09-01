/* Contracts */
import { PDFAdapterContract } from '@domain/contracts/adapters';
import { CVFacadeContract } from '@domain/contracts/facades';
import { CVServiceContract, PortfolioServiceContract } from '@domain/contracts/services';

export class CVFacade implements CVFacadeContract {
    public constructor (
        private readonly cvService: CVServiceContract,
        private readonly portfolioService: PortfolioServiceContract,
        private readonly pdfAdapter: PDFAdapterContract
    ) {}

    public async generateCV(): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            const cvDataDto = await this.portfolioService.getCVData();
            const cvTemplate = this.cvService.generateCVTemplate(cvDataDto);
            const cvPdf = await this.pdfAdapter.generate(cvTemplate);

            return cvPdf;
        } 
        catch (error) {
            throw error;
        }
    }
}