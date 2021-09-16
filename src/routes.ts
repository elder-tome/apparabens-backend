import * as express from 'express';

import UserController from './controllers/UserController';
import PersonController from './controllers/PersonController';

const routes = express.Router();

const userController = new UserController();
const personController = new PersonController();

routes.post('/user', userController.store);
routes.post('/person', personController.create);
routes.get('/person', personController.index);
routes.delete('/person/:id', personController.delete);

export default routes;