import passport from 'passport';
import { jwtStrategy } from './jwt-strategy';

const initPassport = (app: any) => {
    jwtStrategy();
    app.use(passport.initialize());
}

export default initPassport;