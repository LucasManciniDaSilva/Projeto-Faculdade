import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

<<<<<<< HEAD
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import authMiddleware from './app/middleware/auth';
=======
import authMiddleware from './app/middleware/auth';
import ProviderController from './app/controllers/ProviderController';
>>>>>>> c76521b8371aa769f276dd520965374cf7c5ceb3

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

<<<<<<< HEAD
routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
=======
routes.get('/providers', ProviderController.index);
>>>>>>> c76521b8371aa769f276dd520965374cf7c5ceb3

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
