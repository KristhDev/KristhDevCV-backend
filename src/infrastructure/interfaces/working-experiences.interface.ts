import { ModelStatus } from './common.interface';

export type WorkingExperienceEndpoint = {
    id: string;
    position: string;
    company: string;
    description: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    status: ModelStatus;
    created_at: string;
    updated_at: string;
}