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

function maxXor(num, length) {
  var max = 0;
  for (var i = num; i <= length; i++) {
    var xor = (num ^ i);
    if(xor > max) max = xor;
  }
  return max;
}

function handleInput(lines) {
  var max = 0;
  var start = lines[0] * 1;
  var end = lines[1] * 1;
  for (var i = start; i <= end; i++) {
    var xor = maxXor(i, end);
    if(xor > max) max = xor;
  }
  return [max];
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split(eol);

  var results = handleInput(lines);
  process.stdout.write(results.join(eol));
});
