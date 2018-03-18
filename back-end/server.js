import express from 'express';
import session from 'express-session';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import api from './routes/api';
import { initDb } from './initDb.js';

const app = express();

initDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message});
});

app.set('port', (process.env.PORT || '5000'));

app.listen(app.get('port'), function() {
	console.log('Server started on port '+ app.get('port'));
});

module.exports = app;
