import { Application } from 'express';
import available from './available';
import busy from './busy';
import state from './state';
import wanking from './wanking';
import tentative from './tentative';

export default (app: Application) => {
    available(app);
    busy(app);
    state(app);
    wanking(app);
    tentative(app);
}