// const express = require('express');
const monocle = require('express-monocle');
const path = require('path');
const bodyParser = require('body-parser');

const app = monocle();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', function checkIfUserExist(req, res, next) {
  req.user = {
    username: 'hello',
    password: 'world'
  };

  next();
}, function setCookieId(req, res, next) {
  res.cookie = { token: '32432kd9a01232' };
  next();
}, function (req, res, next) {
  res.redirect('/home');
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => console.log('connected on port 3000'));