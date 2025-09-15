import { ModelStatus } from './common.interface';

export type EducationEndpoint = {
    id: string;
    institution: string;
    title: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    status: ModelStatus;
    created_at: string;
    updated_at: string;
}