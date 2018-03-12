const User = require('../model/User');
const jwt = require('jwt-simple');
const config = require('../../config');

const tokenForUser = (user) => {
  const timestamp = new Date();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

module.exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log('Email and passwd', email, password);
  if(!email || !password) {
    return res.status(422).send({err: 'Must provide email and password'});
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if(err) return err;

    if(existingUser) {
      return res.status(422).send({err: 'Email is in use'});
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save((err) => {
      if(err) return next(err);
      res.json({token : tokenForUser(user)});
    });
  });
}

module.exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user)});
}