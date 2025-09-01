/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

/* Adapters */
import { LoggerAdapter } from '@infrastructure/adapters';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter();