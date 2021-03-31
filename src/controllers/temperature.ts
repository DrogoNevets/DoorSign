import { Application, Request, Response } from 'express';
import HAT from '../services/hat';

export default (app: Application) => {
    app.get('/temperature', async (req: Request, res: Response) => {
        try {
          const temp = await HAT.getTemp();

          res.send(temp).status(200).end();
        } catch(e) {
          res.send(e).status(500).end();
        }
    });
}