import 'module-alias/register';
import './paths';

import { loggerAdapter, timeAdapter } from '@config/di';

import { Server } from '@server';

const server = new Server(loggerAdapter, timeAdapter);
server.listen();