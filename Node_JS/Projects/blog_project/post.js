const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test2', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

/*

Babel настроить получилось так: 
#скрипты в package.json

 "scripts": {
    "build": "npx babel index.js --out-dir dist",
    "start": "node dist/index.js",
    "build-start": "yarn build && yarn start"
  }
#пресет в babelrc
{
  "presets": ["babel-preset-env"]
}

*/