import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserModel } from '../../models';
import { JWT_SECRET } from '../default'

export const jwtStrategy = () => {
    passport.use(
        new Strategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: `${JWT_SECRET}`
            },
            (payload, done) => {
                UserModel.findOne({ _id: payload.id }, function(err: any, user: any) {
                    if (err) return done(err, false);
                    if (user) return done(null, user);
                    else return done(null, false);
                })
            }
        )
    );
};