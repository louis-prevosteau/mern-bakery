import cookieParser from 'cookie-parser';
import cors from 'cors'
import express, { Application } from "express";
import helmet from 'helmet';
import { connect, set } from "mongoose";
import morgan from 'morgan';
import passport from 'passport';
import { MONGO_URL, PORT } from "./config/default";
import logger from "./utils/logger";
import routes from './routes';
import initPassport from './config/passport';

export default class App {
    
    private app: Application;
    private port: string | number;

    constructor() {
        this.app = express();
        this.port = PORT || 8080;
        this.connectDatabase();
        this.initMiddlewares();
        this.initRoutes();
    }

    private connectDatabase(): void {
        set('strictQuery', true);
        connect(`${MONGO_URL}`)
        .then(() => logger.info('MongoDB: connected'))
        .catch((err) => logger.error(`MongoDB: ${err}`))
    }

    private initMiddlewares(): void {
        this.app.use(cors({ origin: true }));
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        initPassport(this.app);
    }

    private initRoutes() {
        this.app.use('/api', routes);
    }

    listen(): void {
        this.app.listen(this.port, () => logger.info(`Express: listening on http://localhost:${this.port}`));
    }
};
