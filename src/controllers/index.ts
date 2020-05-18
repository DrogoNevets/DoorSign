import { Application } from 'express';
import available from './available';
import busy from './busy';

export default (app: Application) => {
    available(app);
    busy(app);
}