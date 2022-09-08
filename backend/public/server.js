var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
}

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(allowCrossDomain);

app.get('/pass', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   const resp = '{ "list": ['
      + '{ "id": 1, "login": "rafaelDestroi@gmail.com", "senha": "senha1234", "tipoSenha": "1" },'
      + '{ "id": 2, "login": "Cadeado academia", "senha": "2484", "tipoSenha": "2" }'
      + ']}';
   res.end(resp);
});

app.post('/pass', function (req, res) {
   console.log("REQUISIÇÃO AO POST:");
   console.log(req.body);
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end('Password saved');
});

app.listen(3000, function () {
   console.log("PassKeeper listening");
});