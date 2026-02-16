// Leetcode - Problem List - Problem 09

function isPalindrome(x) {
  if (x < 0) return false;

  var div = 1;
  while (x >= 10 * div) div *= 10;

  while (x) {
    var left = Math.floor(x / div);
    var right = x % 10;

    if (left !== right) return false;

    x = Math.floor((x % div) / 10);
    div = div / 100;
  }

  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// Time Complexity - O(logn)
// Space Complexity - O(1)
