import { Application } from 'express';
import available from './available';
import busy from './busy';
import state from './state';
import wanking from './wanking';

export default (app: Application) => {
    available(app);
    busy(app);
    wanking(app);
}