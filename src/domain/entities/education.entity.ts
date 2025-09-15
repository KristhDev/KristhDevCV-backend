/* Interfaces */
import { EducationEndpoint, ModelStatus } from '@infrastructure/interfaces';

export class EducationEntity {
    private constructor (
        public id: string,
        public institution: string,
        public title: string,
        public startDate: string,
        public endDate: string | null,
        public isCurrent: boolean,
        public status: ModelStatus,
        public createdAt: string,
        public updatedAt: string
    ) {}

    /**
     * Creates a new EducationEntity instance from an EducationEndpoint.
     *
     * @param {EducationEndpoint} endpoint - The EducationEndpoint to create the EducationEntity from.
     * @return {EducationEntity} The created EducationEntity instance.
     */
    public static fromEndpoint(endpoint: EducationEndpoint): EducationEntity {
            return new EducationEntity(
                endpoint.id,
                endpoint.institution,
                endpoint.title,
                endpoint.start_date,
                endpoint?.end_date,
                endpoint.is_current,
                endpoint.status,
                endpoint.created_at,
                endpoint.updated_at
            );
        }
}