require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const log = require('winston');
const helmet = require('helmet');

const env = require('./config/env');
const routes = require('./config/routes');

const app = express();

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'app/public')));
app.use(express.static(path.join(__dirname, 'app/public')));

routes(app);

app.set('port', env.port);
app.listen(app.get('port'), () => log.info(`Listening on port ${app.get('port')}`));

module.exports = app;
