/*
The Utopian tree goes through 2 cycles of growth every year.

 - The first growth cycle occurs during the monsoon, when it doubles in height.
 - The second growth cycle occurs during the summer, when its height increases by 1 meter.

Now, a new Utopian tree sapling is planted at the onset of the monsoon. Its height is 1 meter.

Can you find the height of the tree after N growth cycles?
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
  var test_cases = lines.shift(); // test_cases >= 1 && <= 10
  var result = [];
  lines.forEach(function(l) {
    if(!l) return;
    var cycles = l * 1;
    var height = 1;
    for (var i = 0; i < cycles; i++) {
      height += i % 2 ? 1 : height;
    }
    result.push(height);
  });
  return result;
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split(eol);

  var results = handleInput(lines);
  process.stdout.write(results.join(eol));
});
