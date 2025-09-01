export class CVDto {
    private constructor (
        public authorImage: string,
        public summary: string,
        public skills: SkillEntity[],
        public workingExperiences: WorkingExperienceEntity[]
    ) {}

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