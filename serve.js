var path = require('path');
var fs = require('fs');
var express = require('express');
var https = require('https');
const bodyParser = require('body-parser');

var certOptions = {
  key: fs.readFileSync(path.resolve('./certs/server.key')),
  cert: fs.readFileSync(path.resolve('./certs/server.crt'))
};

var app = express();

app.use(bodyParser.json());

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

const server = https.createServer(certOptions, app).listen(port);
