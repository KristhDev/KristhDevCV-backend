import express, { Application } from 'express';
import cors from 'cors';

/* Environment */
import { env } from '@config/env';

/* Contracts */
import { LoggerAdapterContract, UserAgentAdapterContract } from '@domain/contracts/adapters';

/* Middlewares */
import { LogRequests } from './middlewares';

/* Routes */
import { portfolioRouter } from '@portfolio/routes';

class Server {
    private port: number = Number(env.PORT || 9000);
    private app: Application = express();

    constructor(
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly userAgentAdapter: UserAgentAdapterContract
    ) {}

    /**
     * Initializes the middlewares for the Express app.
     *
     * This function adds the necessary middleware functions to the app.
     * The middlewares added are:
     * - cors: handles Cross-Origin Resource Sharing
     * - express.json: parses incoming JSON requests
     * - logRequests: handles logging requests
     *
     * @private
     * @return {void} - No return value
     */
    private middlewares(): void {
        const logRequests = new LogRequests(this.loggerAdapter, this.userAgentAdapter);

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use((req, res, next) => logRequests.handle(req, res, next));
    }

    /**
     * Defines the routes for the application.
     *
     * @private
     * @return {void} - No return value
     */
    private routes(): void {
        this.app.use('/api/portfolio', portfolioRouter);
    }

    /**
     * Listens for incoming requests and starts the server.
     *
     * @return {void} This function does not return anything.
     */
    public listen(): void {
        this.middlewares();
        this.routes();

        this.app.listen(this.port, () => {
            this.loggerAdapter.info(`Server listening on port ${ this.port }`);
        });
    }
}

export default Server;