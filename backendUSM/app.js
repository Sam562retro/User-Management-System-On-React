const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const connectDB = require('./server/database/connection');
const Router = require('./server/controller/controller');

connectDB();

app.use(bodyParser.json());
app.use('/api', Router);

app.listen(8000);