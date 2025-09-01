import { Router } from 'express';

import { generateCVUseCase } from '@config/di';

import { GenerateCVController } from '../controllers';

const portfolioRouter: Router = Router();

const generateCVController = new GenerateCVController(generateCVUseCase);

portfolioRouter.get('/generate-cv', (req, res) => generateCVController.handle(req, res));

export default portfolioRouter;