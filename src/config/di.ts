/* Contracts */
import { LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

/* Adapters */
import { LoggerAdapter, UserAgentAdapter } from '@infrastructure/adapters';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter();
export const userAgentAdapter: UserAgentAdapterContract = new UserAgentAdapter();