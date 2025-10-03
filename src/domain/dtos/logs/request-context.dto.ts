import { Request } from 'express';

import { userAgentAdapter } from '@config/di';

import { UserAgentParsed } from '@infrastructure/interfaces';

export class RequestContextDto {
    private constructor(
        public readonly method: string,
        public readonly path: string,
        public readonly ip?: string,
        public readonly userAgent?: UserAgentParsed,
    ) {}

    public static fromRequest(req: Request): RequestContextDto {
        const userAgentHeader = req.headers['user-agent'];
        const userAgent = userAgentHeader ? userAgentAdapter.parse(userAgentHeader) : undefined;

        return new RequestContextDto(
            req.method,
            req.path,
            req.ip,
            userAgent
        );
    }

    public toJSON() {
        return {
            ip: this.ip,
            method: this.method,
            path: this.path,
            userAgent: this.userAgent
        }
    }
}