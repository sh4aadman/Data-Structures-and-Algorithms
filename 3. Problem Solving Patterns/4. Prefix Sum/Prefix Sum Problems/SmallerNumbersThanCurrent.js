// Leetcode - Problem List - Problem 1365

function smallerNumbersThanCurrent(nums) {
  var allNums = new Array(101).fill(0);
  var result = new Array(nums.length).fill(0);

  for (var i = 0; i < nums.length; i++) {
    allNums[nums[i]]++;
  }

  for (let j = 1; j < 101; j++) {
    allNums[j] += allNums[j - 1];
  }

  for (var k = 0; k < nums.length; k++) {
    var num = nums[k];
    if (num === 0) {
      result[k] = 0;
    } else {
      result[k] = allNums[num - 1];
    }
  }

  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));

// Time Complexity - O(n + K) - range of number [0, 100]
// Space Complexity - O(K) + O(1)

// Time Complexity - O(nlogn)
// function smallerNumberThanCurrent(nums) {
//   var sorted = [...nums].sort((a, b) => a - b);
//   var map = new Map();

//   for (var i = 0; i < sorted.length; i++) {
//     if (!map.has(sorted[i])) map.set(sorted[i], i);
//   }

//   return nums.map((num) => map.get(num));
// }