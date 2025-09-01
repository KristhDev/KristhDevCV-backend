/* Contracts */
import { PDFAdapterContract } from '@domain/contracts/adapters';
import { CVFacadeContract } from '@domain/contracts/facades';
import { PortfolioServiceContract } from '@domain/contracts/services';

export class CVFacade implements CVFacadeContract {
    public constructor (
        private readonly portfolioService: PortfolioServiceContract,
        private readonly pdfAdapter: PDFAdapterContract
    ) {}

    public async generateCV(): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            const cvDataDto = await this.portfolioService.getCVData();
            // const cvTemplate = this.cvService.generateCVTemplate(cvDataDto);

            const dataString = JSON.stringify({
                authorImage: cvDataDto.authorImage,
                summary: cvDataDto.summary,
                skills: cvDataDto.skills,
                workingExperiences: cvDataDto.workingExperiences
            }, null, 2);

            const cvPdf = await this.pdfAdapter.generate(dataString);

            return cvPdf;
        } 
        catch (error) {
            throw error;
        }
    }
}