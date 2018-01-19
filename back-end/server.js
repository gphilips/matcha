import express from 'express';
// import session from 'express-session';
// import path from 'path';
// import favicon from 'serve-favicon';
// import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import mongoose from 'mongoose';
import api from './routes/api';

mongoose.connect('mongodb://localhost/matcha');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message});
});

app.set('port', (process.env.PORT || '3000'));

app.listen(app.get('port'), function() {
	console.log('Server started on port '+ app.get('port'));
});

module.exports = app;
