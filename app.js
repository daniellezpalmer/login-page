const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session')
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

const users = [{
  username: 'somethin',
  password: 'else'
}]

app.use(function(req, res, next) {
  if (req.url === '/login') {
    next()
  } else if (!req.session.username) {
    res.render('login')
  } else {
    next()
  }
})

app.get('/', function(req, res) {
  res.render('home')
})

app.post('/login', function(req, res) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === req.body.username && users[i].password === req.body.password) {
      req.session.username = req.body.username;
      res.render('home')
    } else {
      res.render('login', {
        error: true
      })
    }
  }
})

app.listen(3000, function() {
  console.log('Started');
})
