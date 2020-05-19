import { Application, Request, Response } from 'express';
import hatSvc, { COLORS } from '../services/hat';
import stateSvc, { StateService } from '../services/state';

export default (app: Application) => {
    app.get('/available', (req: Request, res: Response) => {
        hatSvc.color(COLORS.GREEN);
        stateSvc.state = StateService.AVAILABLE;
        res.end();
    })
}