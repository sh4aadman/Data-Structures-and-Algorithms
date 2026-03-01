// Leetcode - Problem List - Problem 3507

function minimumPairRemoval(nums) {
    var count = 0;
    
    while (nums.length > 1) {
        var isAscending = true;
        var minSum = Infinity;
        var targetIndex = -1;

        for (var i = 0; i < nums.length - 1; i++) {
            var sum = nums[i] + nums[i + 1];

            if (nums[i] > nums[i + 1]) {
                isAscending = false;
            }

            if (sum < minSum) {
                minSum = sum;
                targetIndex = i;
            }
        }

        if (isAscending) {
            break;
        }
        
        count++;
        nums[targetIndex] = minSum;
        nums.splice(targetIndex + 1, 1)
    }

    return count;
}

console.log(minimumPairRemoval([5, 2, 3, 1]));
// console.log(minimumPairRemoval([1, 2, 2]));

// Time Complexity - O(n ^ 2)
// Space Complexity - O(1)

// Array Simulation of Linked List
function minimumPairRemoval(nums) {
    var next = nums.map((_, i) => i + 1);
    next[nums.length - 1] = null;
    var count = 0;

    while (nums.length - count > 1) {
        var current = 0;
        var target = 0;
        var targetAdjSum = nums[current] + nums[next[current]];
        var isAscending = true;

        while (current !== null && next[current] !== null) {
            if (nums[current] > nums[next[current]]) {
                isAscending = false;
            }

            var currAdjSum = nums[current] + nums[next[current]];
            if (currAdjSum < targetAdjSum) {
                target = current;
                targetAdjSum = currAdjSum;
            }

            current = next[current];
        }

        if (isAscending) {
            break;
        }

        count++;
        next[target] = next[next[target]];
        nums[target] = targetAdjSum;
    }

    return count;
}