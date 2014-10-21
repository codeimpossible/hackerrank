/*
John has discovered various rocks. Each rock is composed of various elements,
and each element is represented by a lowercase latin letter from 'a' to 'z'. An
element can be present multiple times in a rock. An element is called a
'gem-element' if it occurs at least once in each of the rocks.

Given the list of N rocks with their compositions, display the number of
gem-elements that exist in those rocks.

Input Format
The first line consists of N, the number of rocks.
Each of the next N lines contain rocks' composition. Each composition consists
of lowercase letters of English alphabet.

Output Format
Print the number of gem-elements that are common in these rocks. If there are
none, print 0.

Constraints
1 ≤ N ≤ 100
Each composition consists of only small latin letters ('a'-'z').
1 ≤ Length of each composition ≤ 100
*/

var eol = require('os').EOL;

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
  input += data;
});


// add problem code here:

// store our gem-elements here
var gems = {};

function handleInput(lines) {
  var gemCount = lines.shift() * 1;
  var commonElems = 0;

  // this is a lot like the find-the-word-that-occurs-the-most problems
  // done in interviews. Except here we're checking for single characters
  // and the only counting the number of unique characters that occur in
  // all the lines.
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var elems = {};
    if(line) {
      // break the line into single characters and mark
      // their occurence in our "elems" hash. only record
      // unique occurrences. if "e" exists 3 times, we still
      // only count it as "1".
      line.split('').forEach(function(c) {
        if(!elems[c]) elems[c] = 1;
      });

      // after we've broken the string down into it's element
      // counts we can apply those element counts to the running
      // total, which we store in the "gems" hash.
      for(var gemElem in elems) {
        if(elems.hasOwnProperty(gemElem)) {
          // this if conditional could be optimized further to
          // only increment the value in gems by 1 instead of
          // the value in the elems hash.
          if(gems[gemElem]) gems[gemElem] += elems[gemElem];
          else gems[gemElem] = 1;
        }
      }
    }
  }

  // All that remains is to take the element counts and tally
  // how many ocurred in each line, which is easy since
  // we de-duped the list as we iterrated over the characters
  // in each line.
  for(var g in gems) {
    if(gems.hasOwnProperty(g)) {
      if(gems[g] === gemCount) commonElems++;
    }
  }

  return [commonElems];
}

// end problem code



process.stdin.on('end', function () {
  var lines = input.split(eol);

  var results = handleInput(lines);
  process.stdout.write(results.join(eol));
});
