// Leetcode - Binary Search - Problem 34

function FirstAndLastPosition(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var start = -1;
    var end = -1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle === target]) start = middle;
        else if (nums[middle] < target) left = middle + 1;
        else right = middle - 1;
        end = right;
    }

    return [start, end];
}

console.log(FirstAndLastPosition([5,7,7,8,8,10], 8))