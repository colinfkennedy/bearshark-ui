import * as express from 'express';
import { AppRouter } from './router';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

let app: express.Express = express();

class BearSharkApp {
  run(): void {
    app.use(bodyParser.json());
    app.use('/', express.static('dist/ui'));
    app.use('/bear-shark', express.static('dist/ui/bearshark.html'));
    app.use('/node_modules/', express.static('node_modules'));
    app.use('/app/', express.static('app'));
    app.use('/api/', new AppRouter().getRouter());
    app.use(morgan('dev'));

    console.log('Starting application on port 8080.');
    app.listen(8080);
  };
}

export { BearSharkApp }
