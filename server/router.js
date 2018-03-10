const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(['foo', 'bar', 'fizz']);
});

module.exports = router;