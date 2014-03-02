var express = require('express');
var boiler = require('./boiler.js');
process.env['JAVA'] = 'node-java';
var app = express();
 
app.get('/ttyl/:url', boiler.respondToURL);
 
var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log('Listening on port 3000...');