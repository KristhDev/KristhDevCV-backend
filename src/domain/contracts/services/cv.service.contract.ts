import { CVDto } from '@domain/dtos/portfolio';

export abstract class CVServiceContract {
    public abstract generateCVTemplate(cvDataDto: CVDto): string
}