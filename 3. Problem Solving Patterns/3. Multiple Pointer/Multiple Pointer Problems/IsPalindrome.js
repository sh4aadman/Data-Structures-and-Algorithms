// Leetcode - Problem List - Problem 125

// Space Complexity - O(1)
// function isPalindrome(s) {
//   var left = 0,
//     right = s.length - 1;

//   while (left < right) {
//     while (left < right && !alphaNum(s[left])) left++;
//     while (right > left && !alphaNum(s[right])) right--;

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

//     left++;
//     right--;
//   }

//   return true;
// }

// function alphaNum(c) {
//   return (
//     (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
//   );
// }

// Space Complexity - O(n)
// function isPalindrome(s) {
//   var newStr = "";

//   for (var c of s) {
//     if (alphaNum(c)) newStr += c.toLowerCase();
//   }

//   return newStr == newStr.split("").reverse().join("");
// }

function isPalindrome(s) {
  var cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  var left = 0,
    right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));

// Time Complexity - O(n)
// Space Complexity - O(n)
