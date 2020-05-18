import express, { Application } from 'express';
import controllers from './controllers';
import hatSvc, { COLORS } from './services/hat';

const app: Application = express();

hatSvc.color(COLORS.RED);

app.listen(8080, () => {
    controllers(app);

    hatSvc.color(COLORS.GREEN);
});
