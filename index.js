'use strict Raad API';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const personRoute = require('./routes/personRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', personRoute.routes);



app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});