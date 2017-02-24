const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const session = require('express-session');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const serveDev = '../client';
const serveProd = '../build/dist/duncanshipton';

const app = express();

if (process.env.NODE_ENV == 'development') {
  app.set('client', serveDev);
} else if (process.env.NODE_ENV == 'production') {
  app.set('client', serveProd);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, app.get('client'))));
app.use(session({ secret: 'guitarcat', resave: false, saveUninitialized: true }));
//TODO: research how to configure session properly (esp. regarding memory leaks / stores)

routes.router(app);

app.set('port', process.env.PORT || 5678);

app.listen(app.get('port'), () => {
  console.log("NODE_ENV: ", process.env.NODE_ENV);
  console.log('listening on port: ', app.get('port'));
});
