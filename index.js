const express = require('express');//install this with npm install express in the terminal, also instal ejs
var app = express();
var gameEngine = require('./gameEngine.js');

app.set('port', process.env.PORT || 5000)
    .use(express.static(__dirname + '/public'))//this lets me put files in the public folder that are acceable globally
    .set('views', __dirname + '/views')
    .set('view engine', 'ejs')
    .get('/', function(req, res){
        res.sendFile('form.html', { root: __dirname + "/public"})
    })
    .get('/game', gameEngine.playGame)
    .listen(app.get('port'), function(){
        console.log('Listening on port: ' + app.get('port'));
    })
