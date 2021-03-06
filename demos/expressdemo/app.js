// 第三方模块的加载
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 设置mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// config swig
var swig = require('swig');
app.set('view engine', 'html');
app.engine("html", swig.renderFile);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// lemon
app.get('/receive', function(req, res, next) {
    var post = { id: 1, username: req.query.username };
    var query = connection.query('INSERT INTO userinfo SET ?', post, function(error, results, fields) {
        if (error) {
            res.json({
                success: 'no',
                msg: 'insert failed'
            })
            // Neat!
        } else {
            res.json({
                success: 'ok',
                msg: 'insert success'
            })
            // Neat!
        }

    });

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
});

module.exports = app;