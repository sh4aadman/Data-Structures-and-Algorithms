// Leetcode - Sorting - Problem 179

// With built-in functions - array.map(String) - converts all elements in an array into a string ["1", "2", "3"] - array.sort(compareFn) - sorts an array by the defined compare function - array.join() - joins each element of an array into a single string - string.replace(regex, replacement) - replaces the content of a string with the defined replacement
function largestNumber2(nums) {
  nums.sort((a, b) => "" + b + a - ("" + a + b));
  if (nums[0] === 0) return "0";
  return nums.join("");
}
// Time Complexity - O(nlogn)
// Space Complexity - O(n)

function largestNumber(nums) {
  var sortedNums = mergeSort(nums);
  console.log(sortedNums);
  var largestNum = sortedNums.join("");
  console.log(largestNum);
  return largestNum[0] === "0" ? "0" : largestNum;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var middle = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, middle));
  var right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {
  var sorted = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (compare(arr1[i], arr2[j])) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }

  return sorted;
}

function compare(num1, num2) {
  return String(num1) + String(num2) > String(num2) + String(num1);
}

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber2([3, 30, 34, 5, 9]));

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
