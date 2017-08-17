const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
  res.render('login')
})

app.post('/login', function (req, res) {
  console.log('username is: ' + req.body.username);
  console.log('password is: ' + req.body.password);
  res.render('home')
})

app.listen(3000, function () {
  console.log('Started');
})
