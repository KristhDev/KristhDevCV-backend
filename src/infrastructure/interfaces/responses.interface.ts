import { EducationEndpoint } from './educations.interface';
import { SkillEndpoint } from './skills.interface';
import { WorkingExperienceEndpoint } from './working-experiences.interface';

export interface CVDataResponse {
    author_image: string;
    summary: string;
    working_experiences: WorkingExperienceEndpoint[];
    educations: EducationEndpoint[];
    skills: SkillEndpoint[];
}