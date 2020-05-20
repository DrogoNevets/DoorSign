import { Application, Request, Response } from 'express';
import hatSvc, { COLORS } from '../services/hat';
import stateSvc, { StateService } from '../services/state';

export default (app: Application) => {
    app.get('/busy', (req: Request, res: Response) => {
        hatSvc.color(COLORS.RED);
        hatSvc.schedule('1:0,255,0', Date.now() + (1000 * 60 * 60));
        stateSvc.state = StateService.UNAVAILABLE;
        res.end();
    })
}