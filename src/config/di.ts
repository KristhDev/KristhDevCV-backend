/* Contracts */
import { HttpClientAdapterContract, LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';
import { CVFacadeContract } from '@domain/contracts/facades';
import { PortfolioServiceContract } from '@domain/contracts/services';
import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

/* Adapters */
import { HttpClientAdapter, LoggerAdapter, UserAgentAdapter } from '@infrastructure/adapters';

/* Services */
import { PortfolioService } from '@infrastructure/services';

/* Facades */
import { CVFacade } from '@application/facades';

/* Use Cases */
import { GenerateCVUseCase } from '@application/usecases/cv';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter();
export const httpClientAdapter: HttpClientAdapterContract = new HttpClientAdapter(loggerAdapter);
export const userAgentAdapter: UserAgentAdapterContract = new UserAgentAdapter();

export const portfolioService: PortfolioServiceContract = new PortfolioService(httpClientAdapter);

export const cvFacade: CVFacadeContract = new CVFacade(portfolioService);

export const generateCVUseCase: GenerateCVUseCaseContract = new GenerateCVUseCase(cvFacade);
