import { Application, Request, Response } from 'express';
import stateSvc, { StateService } from '../services/state';

export default (app: Application) => {
    app.get('/state', (req: Request, res: Response) => {
        res.send(stateSvc.state).end();
    });
}