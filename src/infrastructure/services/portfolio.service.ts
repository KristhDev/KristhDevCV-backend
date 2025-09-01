import { env } from '@config/env';

import { HttpClientAdapterContract } from '@domain/contracts/adapters';
import { PortfolioServiceContract } from '@domain/contracts/services';

import { CVDto } from '@domain/dtos/portfolio';

import { SkillEntity, WorkingExperienceEntity } from '@domain/entities';

import { CVDataResponse, HttpHeaders } from '@infrastructure/interfaces';

export class PortfolioService implements PortfolioServiceContract {
    public constructor (
        private readonly httpClientAdapter: HttpClientAdapterContract
    ) {}

    public async getCVData(): Promise<CVDto> {
        try {
            const url = `${ env.PORTFOLIO_API_URL }/portfolio/cv`
            const headers: HttpHeaders = { Accept: 'application/json' }

            const data = await this.httpClientAdapter.get<CVDataResponse>(url, { headers });

            const skills = data.skills.map(skill => SkillEntity.fromEndpoint(skill));
            const workingExperiences = data.working_experiences.map(
                workingExperience => WorkingExperienceEntity.fromEndpoint(workingExperience)
            );

            return CVDto.create(
                data.author_image,
                data.summary,
                skills,
                workingExperiences
            );
        } 
        catch (error) {
            throw error;
        }
    }
}