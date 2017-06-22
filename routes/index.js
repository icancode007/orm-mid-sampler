var express = require('express');
var pg = require('pg');
var router = express.Router();
var initialize = new pg.Pool({database: 'championhistory'});


/* GET home page. */
router.get('/', function(req, res, next) {
  initialize.query('SELECT * FROM champions', function(error, championlist){
    // res.send(championlist.rows)
    res.render('index',{champs: championlist.rows});
  })
});

module.exports = router;
