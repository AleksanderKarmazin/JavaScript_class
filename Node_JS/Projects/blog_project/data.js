const mongoose = require('mongoose');

var PostModel = require('./Post');

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

const post = new PostModel ({
  title:'Firest record',
  text: 'Nice to meet you!'
});

post.save().then(() => {

  console.log('OK');
});

// https://mongoosejs.com/docs/guide.html

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