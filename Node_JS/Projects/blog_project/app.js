var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); // Для чтения методов POST

// Для работы с Монго ДБ нужна библиотека Монгос
// Поэтомк  npm install mongoose --save

// Ставим бэйбл и присеты 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use (bodyParser.urlencoded({extended: true})); // Для чтения методов POST
app.use (bodyParser.json()); // Для чтения методов POST

const posts = [

  {
    titel:'Helow, world 1',
    text: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку."
  },
  {
    titel:'Helow, world 2',
    text: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку."
  },
  {
    titel:'Helow, world 3',
    text: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку."
  },
  {
    titel:'Helow, world 4',
    text: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку."
  },

];

app.get ('/posts', function (req,res) {
  return res.send(posts);
});


app.get ('/posts/:id', function (req,res) {
  const id = req.params.id
  return res.send(posts[id]);
});


app.post('/posts', function (req,res) {
  const data = req.body;
  console.log(data);
  posts.push(data);
  return res.send (posts); // Передать ответ если мы не хотим чтобы запрос выполнялся постоянно

});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
