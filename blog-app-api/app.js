var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');  //needed for passport
var session = require('express-session');  //needed for passport
var jwt = require('express-jwt'); //needed for passport 

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
var authRouter = require('./routes/auth');

//connecting the models here directly 
require('./models/user');
//connecting passport config
require('./config/passportConfig');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//passport initialization for acting as auth middleware 
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());   // middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

//Route middlewares
app.use('/', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

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

module.exports = app;
