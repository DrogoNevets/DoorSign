import { Application, Request, Response } from 'express';
import hatSvc, { COLORS } from '../services/hat';
import stateSvc, { StateService } from '../services/state';

export default (app: Application) => {
    app.get('/wanking', (req: Request, res: Response) => {
        hatSvc.text('Now wanking!', StateService.WANKING);
        hatSvc.schedule('1:0,255,0', Date.now() + (1000 * 60 * 20));
        stateSvc.state = StateService.WANKING;
        res.end();
    })
}