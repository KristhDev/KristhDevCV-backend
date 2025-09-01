/* Interfaces */
import { ModelStatus, WorkingExperienceEndpoint } from '@infrastructure/interfaces';

export class WorkingExperienceEntity {
    private constructor (
        public id: string,
        public position: string,
        public company: string,
        public description: string,
        public startDate: string,
        public endDate: string | null,
        public isCurrent: boolean,
        public status: ModelStatus,
        public createdAt: string,
        public updatedAt: string
    ) {}

    /**
     * Creates a new WorkingExperienceEntity instance from a WorkingExperienceEndpoint.
     *
     * @param {WorkingExperienceEndpoint} endpoint - The WorkingExperienceEndpoint to create the WorkingExperienceEntity from.
     * @return {WorkingExperienceEntity} The created WorkingExperienceEntity instance.
     */
    public static fromEndpoint(endpoint: WorkingExperienceEndpoint): WorkingExperienceEntity {
        return new WorkingExperienceEntity(
            endpoint.id,
            endpoint.position,
            endpoint.company,
            endpoint.description,
            endpoint.start_date,
            endpoint?.end_date,
            endpoint.is_current,
            endpoint.status,
            endpoint.created_at,
            endpoint.updated_at
        );
    }
}