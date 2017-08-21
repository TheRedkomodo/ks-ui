// var phantomjs = require('phantomjs-prebuilt');
// var childProcess = require('child_process');
//
// console.log(phantomjs)
// var path = require('path')
// var childProcess = require('child_process')
// var phantomjs = require('phantomjs-prebuilt')
// var binPath = phantomjs.path
//
// var childArgs = [
//   path.join(__dirname, 'rasterize.js'),
//   'sample2.html',
//   'james.pdf'
// ]
//
// childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
//   // handle results
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log(stdout)
// })







var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('sample2.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('zames.pdf', function(err, res) {
  if (err) {
    console.log(err);
  }
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
