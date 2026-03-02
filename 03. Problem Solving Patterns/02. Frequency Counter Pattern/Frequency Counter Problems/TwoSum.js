// Leetcode - Problem List - Problem 01

function twoSum(nums, target) {
  var prevMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    if (prevMap.has(diff)) return [prevMap.get(diff), i];
    prevMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
