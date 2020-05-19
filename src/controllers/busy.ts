import { Application, Request, Response } from 'express';
import hatSvc, { COLORS } from '../services/hat';
import stateSvc, { StateService } from '../services/state';

export default (app: Application) => {
    app.get('/busy', (req: Request, res: Response) => {
        hatSvc.color(COLORS.RED);
        hatSvc.schedule('1:0,255,0', Date.now() + 10000);
        stateSvc.set(StateService.UNAVAILABLE);
        res.end();
    })
}