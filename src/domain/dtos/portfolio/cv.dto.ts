/* Entities */
import { SkillEntity, WorkingExperienceEntity } from '@domain/entities';

export class CVDto {
    private constructor (
        public authorImage: string,
        public summary: string,
        public skills: SkillEntity[],
        public workingExperiences: WorkingExperienceEntity[]
    ) {}

    /**
     * Creates a new CVDto instance.
     *
     * @param {string} authorImage - The author's image.
     * @param {string} summary - The summary.
     * @param {SkillEntity[]} skills - The skills.
     * @param {WorkingExperienceEntity[]} workingExperiences - The working experiences.
     * @return {CVDto} The created CVDto instance.
     */
    public static create(
        authorImage: string,
        summary: string,
        skills: SkillEntity[],
        workingExperiences: WorkingExperienceEntity[]
    ): CVDto {
        return new CVDto(
            authorImage,
            summary,
            skills,
            workingExperiences
        );
    }
}