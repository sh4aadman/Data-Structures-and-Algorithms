// Leetcode - Problem List - Problem 2390

function removeStars(s) {
  var stack = [];

  for (var char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
console.log(removeStars("*"));

// Time Complexitty - O(n)
// Space Complexitty - O(n)
