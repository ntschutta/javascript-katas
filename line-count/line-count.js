fs = require('fs');

var lineCount = 0;
fs.readFile('sample1.js', 'utf8', function (err,data) {
  if (err) {
    return -1;
  }
  //some stuff goes here
  console.log('count: ' + lineCount);
});
