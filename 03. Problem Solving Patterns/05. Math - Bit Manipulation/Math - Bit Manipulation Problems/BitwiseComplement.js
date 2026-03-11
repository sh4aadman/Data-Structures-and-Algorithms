// Leetcode - Problem List - Problem 1009

function bitwiseComplement(n) {
  var given = n.toString(2);
  var complement = "";

  for (var char of given) {
    complement += char === "1" ? "0" : "1";
  }

  return parseInt(complement, 2);
}

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));

// Time Complexity - O(n)
// Space Complexity - O(n)
