'use strict';

const express = require('express');
const app = express();
const photos = require('./routes/photos')
const router = express.Router();

app.use(photos);
app.listen(3000, function(){
  console.log('listening');
});
