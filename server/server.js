const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(session({ secret: 'guitarcat', resave: false, saveUninitialized: true }));
//TODO: research how to configure session properly (esp. regarding memory leaks / stores)

routes.router(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('listening on port: ', app.get('port'));
});
