import 'module-alias/register';
import './paths';

import { loggerAdapter, userAgentAdapter } from '@config/di';

import { Server } from '@server';

const server = new Server(loggerAdapter, userAgentAdapter);
server.listen();