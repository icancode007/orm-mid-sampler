var pg = require('pg');
var err ;
var champ;
var initialize = new pg.Pool({database: 'championhistory'});

const seq = {
  findAll: function (callback){
      initialize.query('SELECT * FROM champions', callback)
  },
  findById: function(param,callback){
    initialize.query('SELECT * FROM champions WHERE id= '+param,callback)
  }
}
// const findAll = function (callback){
//     initialize.query('SELECT * FROM champions', callback)
//
// }
module.exports = seq;
// module.exports = findAll;
