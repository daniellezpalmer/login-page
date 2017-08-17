const bodyParser = require('body-parser');
const express = require('express');
// const expressValidator = require('express-validator');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(expressValidator());

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
  res.send('home')
})

app.listen(3000, function () {
  console.log('Started');
})
