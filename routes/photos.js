const express = require('express');
const app = express();
const router = express.Router();
const queries = require('../queries/photos');

router.get('/', function( req, res, next) {
  queries.list()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
