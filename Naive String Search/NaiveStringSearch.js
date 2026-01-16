// A naive approach to find a shorter string into the longer string

function NaiveStringSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[j + i]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(NaiveStringSearch("lorie loled", "lo"));

// Time Complexity - O(n^2)
// Space Complexity - O(1)