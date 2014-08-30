var os = require('os');
var util = require('util');

var express = require('express');

function main() {
  var app = express();
  var port = +process.env.PORT || 3000;

  app.get('/', function (req, res) {
    res.send(util.format('%s:%d', os.hostname(), port));
  });

  app.listen(port);
  console.log('PORT %d', port);
}

if (module === require.main) { main(); }
