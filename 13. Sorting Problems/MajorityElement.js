// Leetcode - Sorting - Problem 169

// Space Complexity - O(1)
function majorityElement(nums) {
  var result = 0;
  var majority = 0;
  for (let n of nums) {
    if (majority === 0) result = n;
    majority += n === result ? 1 : -1;
  }

  return result;
}

// Space Complexity - O(n)
// function majorityElement(nums) {
//     var hash = {};
//     var result = 0;
//     var majority = 0;
//     for (let n of nums) {
//         hash[n] = 1 + (hash[n] || 0);
//         if (hash[n] > majority) {
//             result = n;
//             majority = hash[n];
//         }
//     }
//     return result;
//  }


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Time Complexity - O(n)
// Space Complexity - O(1)
