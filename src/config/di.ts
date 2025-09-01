/* Contracts */
import { HttpClientAdapterContract, LoggerAdapterContract, PDFAdapterContract, TimeAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';
import { CVFacadeContract } from '@domain/contracts/facades';
import { CVServiceContract, PortfolioServiceContract } from '@domain/contracts/services';
import { GenerateCVUseCaseContract } from '@domain/contracts/usecases/cv';

/* Adapters */
import { HttpClientAdapter, LoggerAdapter, PDFAdapter, TimeAdapter, UserAgentAdapter } from '@infrastructure/adapters';

/* Services */
import { CVService, PortfolioService } from '@infrastructure/services';

/* Facades */
import { CVFacade } from '@application/facades';

/* Use Cases */
import { GenerateCVUseCase } from '@application/usecases/cv';

export const timeAdapter: TimeAdapterContract = new TimeAdapter();
export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter(timeAdapter);
export const httpClientAdapter: HttpClientAdapterContract = new HttpClientAdapter(loggerAdapter);
export const pdfAdapter: PDFAdapterContract = new PDFAdapter();
export const userAgentAdapter: UserAgentAdapterContract = new UserAgentAdapter();

export const cvService: CVServiceContract = new CVService(timeAdapter);
export const portfolioService: PortfolioServiceContract = new PortfolioService(httpClientAdapter);

export const cvFacade: CVFacadeContract = new CVFacade(cvService, portfolioService, pdfAdapter);

export const generateCVUseCase: GenerateCVUseCaseContract = new GenerateCVUseCase(cvFacade);
