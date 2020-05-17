var express = require('express');
var router = express.Router();
var faker = require('faker');

router.get('/', function(req, res, next) {
  res.status(200).send([{
      id: faker.random.number(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      colar: faker.commerce.color()
  }]);
});

router.get('/:id', function(req, res, next) {
    res.status(200).send({
        id: faker.random.number(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        colar: faker.commerce.color()
    });
  });
  
/*  router.get('/', function() {});  */

/*  router.get('/', function(req, res, next) {

});  */



/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
module.exports = router;
