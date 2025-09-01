import { CVDto } from '@domain/dtos/portfolio';

export abstract class PortfolioServiceContract {
    public abstract getCVData(): Promise<CVDto>;
}