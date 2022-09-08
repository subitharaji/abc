var express = require('express');
var app = express();

var path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.render('home');
});
app.listen (3000);
console.log ('Listening on port 3000');