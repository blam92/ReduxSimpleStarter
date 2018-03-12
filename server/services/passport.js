const passport = require('passport');
const User = require('../model/User');
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = {
  usernameField: 'email'
}
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.find({ email: email }, (err, user) => {
    if(err) return done(err);
    if(!user || !user.length) return done(null, false);
    console.log('user found', user);
    user[0].comparePassword(password, (err, isMatch) => {
      if(err) return done(err);
      if(!isMatch) return done(null, false);

      return done(null, user[0]);
    })
  });
});


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (token, done) => {
  User.findById(token.sub, (err, user) => {
    if(err) return done(err, false);

    return user ? done(null, user) : done(null, false);
  })
});

passport.use(jwtLogin);
passport.use(localLogin);