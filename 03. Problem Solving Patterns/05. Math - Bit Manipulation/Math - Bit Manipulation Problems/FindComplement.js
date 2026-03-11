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

// Time Complexity - O(n)
// Space Complexity - O(n)
