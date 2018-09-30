var express = require('express');

var app = express();

//setup template engine
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('./public'));

localhost