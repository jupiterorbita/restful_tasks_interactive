var express = require('express');
var app = express();

// var path = require('path');

// app.use(express.static(path.join(__dirname, "./client/static")));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const flash = require('express-flash');
// app.use(flash());
app.use(express.static( __dirname + '/angularApp/dist/myAngular' ));
console.log("\n===========", app.use(express.static( __dirname + '/myAngular/dist/myAngular' )));

// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

const server = app.listen(5000);
// console.log("SERVER ===========> ", server)
console.log('listening on port: 5000');

//session
// var session = require('express-session');
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }))

require("./server/config/mongoose.js")
// require('./server/models/animal.js')

require('./server/config/routes.js')(app);