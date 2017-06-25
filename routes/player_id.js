var express = require('express');
var router = express.Router();
var seq = require('../public/javascripts/functions.js');
// var Flickr = require('flickr-sdk');
// var flickr = new Flickr({
//   api_key: "7af9ab8a34e08c02962de9d736fb101f",
//   secret: "fe78c9f05ddb19a9"
// });
const NBA = require('nba');

router.get('/:id',function(req,res,next){
  let param = req.params.id;
  seq.findById(param,function(err,player){

    let nbaplayer = NBA.findPlayer(player.rows[0].mvp);
    console.log(nbaplayer.playerId)
    NBA.stats.playerInfo({PlayerID: nbaplayer.playerId}).then(function(nbap){
      res.render('player',{nbap: nbap});
      // res.send(nbap)
    })
  })
})
module.exports = router;
