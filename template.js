/*
*/

var eol = require('os').EOL;

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
  input += data;
});


// add problem code here:

function handleInput(lines) {
  lines.shift(); // discard the first line
  var results = [];

  for (var i = 0, l = lines.length; i < l; i++) {
    var line = lines[i];
    if(line) {

    }
  }

  return results;
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split(eol);

  var results = handleInput(lines);
  process.stdout.write(results.join(eol));
});
