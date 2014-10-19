// really simple test harness for our hackerrank scripts

var eol = require('os').EOL;
var fs = require('fs');
var stdin = require('mock-stdin').stdin();
var txt = fs.readFileSync(process.argv[3], 'utf8');

require('../' + process.argv[2]); // require from the root

var now = Date.now();
stdin.send(txt.split('\n'));

stdin.send(null);

process.stdout.write(eol);
process.stdout.write(eol + "took " + (Date.now() - now) + "ms");
