// Two Pointer Technique

// Creating pointers or values that correspond to an index/position and move towards the beginning, end or middle based on certain condition.

function sumZero(nums) {
  var left = 0,
    right = nums.length - 1;
  while (left < right) {
    var sum = nums[left] + nums[right];
    if (sum === 0) return [nums[left], nums[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// Time Complexity - O(n)
// Space Complexity - O(1)
