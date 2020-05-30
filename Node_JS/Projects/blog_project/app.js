const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser'); // Для чтения методов POST
const mongoose = require('mongoose');
const PostModel = require('./Post');


// Для работы с Монго ДБ нужна библиотека Монгос
// Поэтомк  npm install mongoose --save
// Ставим бэйбл и присеты 

const app = express();
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

app.use (bodyParser.urlencoded({extended: true})); // Для чтения методов POST
app.use (bodyParser.json()); // Для чтения методов POST







// https://mongoosejs.com/docs/guide.html

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.post('/posts', function (req,res)  {
  const data = req.body;
  const post = new PostModel ({
    title: data.title,
    text: data.text
  });

  post.save().then(() => {
    res.send({status:'OK'})
  });

});

app.get('/posts', function (req,res)  {
    PostModel.find().then((err, posts) => {
      if (err) {
        res.send(err);
      }
      res.json(posts)
    }
    )
  });


app.delete('/posts/:id', function (req,res)  {
  PostModel.remove({
  _id: req.params.id  
  }).then(post=>{
    if (post) {
      res.json({status: 'Delited'})
    } else {
      res.json({status: 'Error'})
    }
     
  });
});

app.put('/posts/:id', function (req,res)  {
  PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err)=> {
    if (err) {
      res.send(err);
    }
    res.json({status: 'Updated'})
  });
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
