const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3090;

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

app.listen(port, () => console.log('Server listening on', port));
