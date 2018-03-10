const router = require('express').Router();
const authController = require('./controllers/authentication');
router.post('/signup', authController.signup);

module.exports = router;