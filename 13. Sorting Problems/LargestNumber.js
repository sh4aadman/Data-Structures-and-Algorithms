// Leetcode - Sorting - Problem 179

function largestNumber(nums) {
    if (nums.length <= 1) return nums;
    var mid = Math.floor((nums.length) / 2);
    var left = largestNumber(nums.slice(0, mid));
    var right = largestNumber(nums.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2) {
    var num = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (String(arr1[i]) + String(arr2[j]) < String(arr2[j]) + String(arr1[i])) {
            num.push(String(arr2[j]) + String(arr1[i]));
            j++;
            i++;
        } else {
            num.push(String(arr1[i]) + String(arr2[j]));
            i++;
            j++
        }
    }
    while (i < arr1.length) {
        num.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        num.push(arr2[j]);
        j++;
    }
    return num.join("");
}

// console.log(merge([30], [3, 34]));
console.log(largestNumber([3,30,34,5,9]));