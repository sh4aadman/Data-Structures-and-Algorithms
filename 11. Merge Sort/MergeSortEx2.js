// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.

function merge(arr1, arr2, comparator) {
  var sorted = [];
  var i = 0;
  var j = 0;
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
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

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

console.log(mergeSort([4, 20, 12, 10, 7, 9]));

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
