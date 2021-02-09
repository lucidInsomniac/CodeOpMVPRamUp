var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Need to create another line with new var  for new route
var indexRouter = require('./routes/allData');
var usersRouter = require('./routes/allData');
var users2Router = require('./routes/inventory');
var users3Router = require('./routes/receiving');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res, next) {
  res.send("Access the API at path /api");
});

app.use('/', indexRouter);
app.use('/allData', usersRouter);
//Need to create another line with new var  for new route
app.use('/inventory', users2Router);
app.use('/receiving', users3Router);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
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
  res.send('this is from your backened >(');
});

module.exports = app;
