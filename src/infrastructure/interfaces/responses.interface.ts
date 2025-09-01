import { SkillEndpoint } from './skills.interface';
import { WorkingExperienceEndpoint } from './working-experiences.interface';

export interface CVDataResponse {
    author_image: string;
    summary: string;
    skills: SkillEndpoint[];
    working_experiences: WorkingExperienceEndpoint[];
}