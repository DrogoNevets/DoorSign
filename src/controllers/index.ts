import { Application } from 'express';
import available from './available';
import busy from './busy';
import state from './state';

export default (app: Application) => {
    available(app);
    busy(app);
    state(app);
}