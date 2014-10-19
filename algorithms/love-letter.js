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

function replaceLetter(str, letter, index) {
  return [str.slice(0, index), letter, str.slice(index + 1)].join('');
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function walkString(s, r) {
  var ops = 0;
  var index = 0;
  while(r !== s) {
    if(s[index] === r[index]) {
      index++;
    } else {
      var start = s.charCodeAt(index);
      var end = r.charCodeAt(index);
      if(start < end) {
        ops += end - start;
        s = replaceLetter(s, s[index], s.length - (index + 1));
        r = replaceLetter(r, s[index], index);
      }
      if(start > end) {
        ops += start - end;
        s = replaceLetter(s, r[index], index);
        r = replaceLetter(r, r[index], r.length - (index + 1));
      }
    }
  }
  return ops;
}

function handleInput(lines) {
  lines.shift(); // remove the first line
  var results = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if(line) {
      var rev = reverse(line);
      results.push(walkString(line, rev));
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
