var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');

app.use(express.static('public'));
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pass', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   const resp = '{ "list": ['
      + '{ "id": 1, "login": "rafaelDestroi@gmail.com", "senha": "senha1234", "tipoSenha": "1" },'
      + '{ "id": 2, "login": "Cadeado academia", "senha": "2484", "tipoSenha": "2" }'
      + ']}';
   res.end(resp);
});

app.post('/pass', function (req, res) {
   console.log(req.body);
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end('Password saved');
});

var server = app.listen(3000, function () {

   var host = server.address().address;
   var port = server.address().port;

   console.log("PassKeeper listening at http://%s:%s", host, port);
});