// Leetcode - Problem List - Problem 476

function findComplement(nums) {
  var given = nums.toString(2);
  var complement = "";

  for (var char of given) {
    complement += char === "1" ? "0" : "1";
  }

  return parseInt(complement, 2);
}

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(1));

// Time Complexity - O(n) [string] / O(1) [bitmask]
// Space Complexity - O(n)

function bitwiseComplement(n) {
  if (n === 0) return 1;

  var numBits = Math.floor(Math.log2(n)) + 1;

  var mask = (1 << numBits) - 1;

  return n ^ mask;
}
