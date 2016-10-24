//dependencies
var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
  res.send('wok');
});

router.route('/newTask')
    .get(function(req, res) {
      res.send('jj');
    });

//Return router
module.exports = router;
