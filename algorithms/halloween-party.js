/*
Alex is attending a Halloween party with his girlfriend Silvia.
At the party, Silvia spots a giant chocolate bar.
If the chocolate can be served as only 1 x 1 sized pieces and Alex can cut the
chocolate bar exactly K times, what is the maximum number of chocolate pieces
Alex can cut and give Silvia?

Input Format
The first line contains an integer T, the number of test cases. T lines follow.
Each line contains an integer K

Output Format
T lines. Each line contains an integer that denotes the maximum number of
pieces that can be obtained for each test case.

Constraints
1<=T<=10
2<=K<=107

Note
Chocolate must be served in size of 1 x 1 size pieces.
Alex can't relocate any of the pieces, nor can he place any piece on top of
other.
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

  // the solution here is to find the mid-point of the number of cuts
  // this will be the number of "horizontal" cuts Alex will make in the
  // chocolate bar...
  for (var i = 0; i < lines.length; i++) {
    if(lines[i]) {
      var cuts = lines[i] * 1;
      var mid = Math.floor(cuts/2); // mid point found

      // once we have the mid point, we have the number of "vertical" cuts
      // or as I called it the "remainder". Multiply this number by the mid
      // point, because with each vertical cut we create MID number of pieces
      var rem = cuts - mid;
      results.push( mid * rem );
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
