var express = require('express');
var boiler = require('./boiler.js');
 
var app = express();
 
app.get('/ttyl/:url', boiler.respondToURL);
 
var port = Number(process.env.PORT || 5000);
app.listen(port|| 3000);
console.log('Listening on port 3000...');