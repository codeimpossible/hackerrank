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
  var to_num = function(i) { return i * 1; };

  var line1 = lines.shift();
  var width = lines.shift().split(' ').map(to_num);
  var results = [];

  lines.forEach(function(l) {
    l = l.split(' ').map(to_num);
    if(l.length < 2) return;

    var w;
    var vehicles = { bike: true, car: true, truck: true };
    for (var i = l[0]; i <= l[1]; i++) {
      w = width[i];
      if(vehicles.bike) vehicles.bike = w >= 1;
      if(vehicles.car) vehicles.car = w >= 2;
      if(vehicles.truck) vehicles.truck = w >= 3;
    }
    results.push( vehicles.truck ? 3 : vehicles.car ? 2 : 1 );
  });

  return results;
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split(eol);

  var results = handleInput(lines);
  process.stdout.write(results.join(eol));
});
