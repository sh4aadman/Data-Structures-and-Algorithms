// Leetcode - Binary Search - Problem 367

function isPerfectSquare(num) {
  var start = 1;
  var end = num;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (mid * mid > num) {
      end = mid - 1;
    } else if (mid * mid < num) {
      start = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(isPerfectSquare(14));
console.log(isPerfectSquare(16));

// Time Complexity - O(logn)
// Space Complexity - O(1)
