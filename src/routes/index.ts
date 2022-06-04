import { Router, Request, Response } from 'express';
import imageApi from './api/imageApi';
const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('Main API route');
});

routes.use('/imageApi', imageApi);

export default routes;
