var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index_next');
});




/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
module.exports = router;
