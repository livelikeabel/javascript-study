const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello, worsasdfasdfdsafsadld!')
})

app.get('/yo', function (req, res) {
  res.send('yo!')
})

const server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
});