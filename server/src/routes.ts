import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// serve para desaclopar o arquivo de rotas
// para outro arquivo
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index, show, create, update, delete
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', pointsController.create);

export default routes;
