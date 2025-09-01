/* Contracts */
import { HttpClientAdapterContract, LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

/* Adapters */
import { HttpClientAdapter, LoggerAdapter, UserAgentAdapter } from '@infrastructure/adapters';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter();
export const httpClientAdapter: HttpClientAdapterContract = new HttpClientAdapter(loggerAdapter);
export const userAgentAdapter: UserAgentAdapterContract = new UserAgentAdapter();