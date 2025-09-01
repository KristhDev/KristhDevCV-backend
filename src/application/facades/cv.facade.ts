/* Contracts */
import { CVFacadeContract } from '@domain/contracts/facades';
import { PortfolioServiceContract } from '@domain/contracts/services';

export class CVFacade implements CVFacadeContract {
    public constructor (
        private readonly portfolioService: PortfolioServiceContract
    ) {}

    public async generateCV(): Promise<void> {
        try {
            const cvData = await this.portfolioService.getCVData();
            console.log(JSON.stringify(cvData, null, 2));
        } 
        catch (error) {
            throw error;
        }
    }
}