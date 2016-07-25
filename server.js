// Import extenal modules
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'board'
});

conn.connect();

// set PORT
var port = process.env.PORT || 3000;

// basie configuration
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Run server
app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});

// Import my modules
require('./routes/getData')(app, conn);
require('./routes/addData')(app, conn);
require('./routes/editData')(app, conn);
require('./routes/deleteData')(app, conn);
