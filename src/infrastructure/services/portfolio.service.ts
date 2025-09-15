/* Env */
import { env } from '@config/env';

/* Contracts */
import { HttpClientAdapterContract } from '@domain/contracts/adapters';
import { PortfolioServiceContract } from '@domain/contracts/services';

/* Dtos */
import { CVDto } from '@domain/dtos/portfolio';

/* Entities */
import { EducationEntity, SkillEntity, WorkingExperienceEntity } from '@domain/entities';

/* Interfaces */
import { CVDataResponse, HttpHeaders } from '@infrastructure/interfaces';

export class PortfolioService implements PortfolioServiceContract {
    public constructor (
        private readonly httpClientAdapter: HttpClientAdapterContract
    ) {}

    /**
     * Gets the CV data from the portfolio API.
     *
     * @return {Promise<CVDto>} The CV data.
     */
    public async getCVData(): Promise<CVDto> {
        try {
            const url = `${ env.PORTFOLIO_API_URL }/portfolio/cv`
            const headers: HttpHeaders = { Accept: 'application/json' }

            const data = await this.httpClientAdapter.get<CVDataResponse>(url, { headers });

            const workingExperiences = data.working_experiences.map(
                workingExperience => WorkingExperienceEntity.fromEndpoint(workingExperience)
            );

            const educations = data.educations.map(education => EducationEntity.fromEndpoint(education));
            const skills = data.skills.map(skill => SkillEntity.fromEndpoint(skill));

            return CVDto.create(
                data.author_image,
                data.summary,
                workingExperiences,
                educations,
                skills,
            );
        } 
        catch (error) {
            throw error;
        }
    }
}