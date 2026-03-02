// Leetcode - Binary Search - Problem 374

var pick = 71;

function guess(result) {
    if (pick > result) return 1;
    else if (pick < result) return -1;
    else if (pick === result) return 0;
}

function guessNumber(n) {
    var start = 1;
    var end = n;
    while (start <= end) {
      var middle = Math.floor((start + end) / 2);
      var result = guess(middle);
      if (result < 0) end = middle - 1;
      else if (result > 0) start = middle + 1;
      else if (result === 0) return middle;
    }
    return 1;
}

console.log(guessNumber(100));

// Time Complexity - O(logn)
// Space Complexity - O(1)
