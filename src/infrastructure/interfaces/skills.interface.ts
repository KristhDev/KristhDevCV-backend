import { ModelStatus } from './common.interface';

export type SkillType = 'baas' | 'database' | 'framework' | 'language' | 'tool';

export type SkillEndpoint = {
    id: string;
    name: string;
    type: SkillType;
    badge: string;
    image: string;
    status: ModelStatus;
    created_at: string;
    updated_at: string;
}