/* Entities */
import { EducationEntity, SkillEntity, WorkingExperienceEntity } from '@domain/entities';

export class CVDto {
    private constructor (
        public authorImage: string,
        public summary: string,
        public workingExperiences: WorkingExperienceEntity[],
        public educations: EducationEntity[],
        public skills: SkillEntity[]
    ) {}

    /**
     * Creates a new CVDto instance.
     *
     * @param {string} authorImage - The author's image.
     * @param {string} summary - The summary.
     * @param {WorkingExperienceEntity[]} workingExperiences - The working experiences.
     * @param {EducationEntity[]} educations - The educations.
     * @param {SkillEntity[]} skills - The skills.
     * @return {CVDto} The created CVDto instance.
     */
    public static create(
        authorImage: string,
        summary: string,
        workingExperiences: WorkingExperienceEntity[],
        educations: EducationEntity[],
        skills: SkillEntity[],
    ): CVDto {
        return new CVDto(
            authorImage,
            summary,
            workingExperiences,
            educations,
            skills
        );
    }
}