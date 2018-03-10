const express = require('express');
const http = require('http');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3090;
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth').catch((err) => console.log('mongoose err', err));

app.use(morgan('combined'));
app.use(express.json());
app.use('/', router);
app.listen(port, () => console.log('Server listening on', port));