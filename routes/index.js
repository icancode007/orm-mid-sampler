var express = require('express');
var router = express.Router();
//this file is a route therefore the function that creates the shortcut for the public directory
//does not create a shortcut for this routes directory
// var findAll = require('../public/javascripts/functions.js');
var seq = require('../public/javascripts/functions.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  //this is the queries are done without sequelize
  // initialize.query('SELECT * FROM champions', function(error, championlist){
  //   // res.send(championlist.rows)
  //   res.render('index',{champs: championlist.rows});
  // })
  //without the object literal i was accesing the method this way
  // findAll(function(error,championlist){
  //   res.render('index',{champs: championlist.rows});
  // });
    seq.findAll(function(error,championlist){
      res.render('index',{champs: championlist.rows});
    })
});

module.exports = router;
