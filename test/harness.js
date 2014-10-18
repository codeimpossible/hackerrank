// really simple test harness for our hackerrank scripts

var fs = require('fs');
var stdin = require('mock-stdin').stdin();
var txt = fs.readFileSync(process.argv[3], 'utf8');

require('../' + process.argv[2]); // require from the root

stdin.send(txt.split('\n'));

stdin.send(null);
