var LineByLineReader = require('line-by-line');
var fs = require('fs');
var lr = new LineByLineReader('./textfile/champswithmvp.txt');
var arr = [];
var arrtest =['2017','Golden State Warriors','Cleveland Cavaliers','4-1','Kevin Durant'];
var models =  require('../../models/index');
var Champion = models.champion;

lr.on('error',function(err){
    console.log(err);
});

lr.on('line',function(line){
  arr.push(line.split(','));

  lr.pause();
  setTimeout(function(){
    lr.resume();
  },100);
});
lr.on('end',function(){
  console.log("Done");
  console.log(arr);
  for(let i =0;i<arr.length;i++){
      Champion.create({
        title:arr[i][0],
        winingteam:arr[i][1],
        loosingteam:arr[i][2],
        series:arr[i][3],
        mvp:arr[i][4]
      }).then(function(champion){
        console.log(champion);
      })
  }
})

// let fs = require("fs");
// var champs = fs.readFileSync('./textfile/champswithmvp.txt','utf8');
//
// console.log(champs);
//
//
// fs.readFile('./textfile/champswithmvp.txt', 'utf8', function(err, contents) {
//     console.log(contents);
// });
//
// console.log('after calling readFile');
