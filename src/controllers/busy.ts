import { Application, Request, Response } from 'express';
import hatSvc, { COLORS } from '../services/hat';

export default (app: Application) => {
    app.get('/busy', (req: Request, res: Response) => {
        hatSvc.color(COLORS.RED);
        res.end();
    })
}