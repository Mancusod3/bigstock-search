var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Set Port
app.set('port', (process.env.port || 3000));

// Set Static Path
app.use(express.static(path.join(__dirname, 'client')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Start Server
app.listen(app.get('port'), function() {
	console.log('Server Has Started On Port: ' + app.get('port'));
});