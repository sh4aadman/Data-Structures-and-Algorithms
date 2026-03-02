// Leetcode - Problem List - Problem 231

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));

// Time Complexity - O(1)
// Space Complexity - O(1)
