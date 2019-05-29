const express = require('express');
const app = express();

const fs = require('fs');
const _ = require('lodash');
const users = [];

fs.readFile('users.json', { encoding: 'utf8' }, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })
})

app.set('views', './views')
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index', { users: users })
})

app.get(/big.*/, function (req, res, next) {
  console.log('BIG USER ACCESS')
  next()
})

app.get(/.*dog.*/, function (req, res, next) {
  console.log('DOGS GO WOOF')
  next()
})

app.get('/:username', function (req, res) {
  const username = req.params.username
  res.send(username);
})

const server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
});