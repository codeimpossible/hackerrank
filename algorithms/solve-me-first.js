process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
  input += data;
});


// add problem code here:

function handleInput(lines) {
  return (lines[0] * 1) + (lines[1] * 1);
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split("\n");

  var res = handleInput(lines);

  process.stdout.write(""+res+"\n");
});
