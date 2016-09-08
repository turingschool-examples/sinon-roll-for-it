'use strict'

const express = require('express');
const app = express();
const http = require('http');
const cors = require('express-cors');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const play = require('./lib/play.js');

http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Roll For It';
app.locals.rolls = [];

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (request, response) => {
  response.render('index', { title: app.locals.title });
});

app.get('/rolls', (request, response) => {
  response.send({ rolls: app.locals.rolls });
});

app.post('/rolls', (request, response) => {
  var result = play.castMagicMissile();
  app.locals.rolls.push(result);
  response.status(201).send({ result });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;
