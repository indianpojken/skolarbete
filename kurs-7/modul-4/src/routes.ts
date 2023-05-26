import { Router } from 'express';

import { usersRoute } from './routes/users.route';
import { channelsRoute } from './routes/channels.route';

export const routes = Router();

routes.use('/users', usersRoute);
routes.use('/channels', channelsRoute);
