var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hook', function (req, res) {
    console.log(req)
});

module.exports = router;
