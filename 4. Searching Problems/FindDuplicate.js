// Leetcode - Binary Search - Problem 287

// Floyd's Tortoise and Hare Algorithm - for linked lists - involves slow and fast pointer - slow and fast pointer intersects when it meets a cycle

// The problem indicates there will be an array of n integer and the range of each input will be in [1, n] range and the length of the array will be [1 + n]. So there will be a linked list containing a cycle. The problem asks to use one constant extra space.

// Another Solution - Mark visited element negative - distance count
// function findDuplicate(nums) {
//   for (var i = 0; i < nums.length; i++) {
//     var dist = Math.abs(nums[i]);
//     if (dist < 0) {
//       return dist;
//     }
//     nums[dist] = -nums[dist];
//   }

//   return -1;
// }

function findDuplicate(nums) {
  var slow = nums[0];
  var fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  var slow2 = nums[0];

  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;
}

// console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]));

// Time Complexity - O(n)
// Space Complexity - O(1)
