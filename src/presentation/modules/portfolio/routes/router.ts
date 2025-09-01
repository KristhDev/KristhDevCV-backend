import { Router } from 'express';

/* Dependencies */
import { generateCVUseCase } from '@config/di';

/* Controllers */
import { GenerateCVController } from '../controllers';

const portfolioRouter: Router = Router();

const generateCVController = new GenerateCVController(generateCVUseCase);

portfolioRouter.get('/generate-cv', (req, res) => generateCVController.handle(req, res));

export default portfolioRouter;