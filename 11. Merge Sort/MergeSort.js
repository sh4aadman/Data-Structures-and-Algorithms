// Merge Sort Algorithm

// Supposing that if there is only one element in an array, the array is always sorted - splitting the array until the length of an array is 1 - there is only one element - then merging all the individual sorted array in ascending order.

// https://youtube.com/shorts/7PcqoMWbxN8?si=pUatWKV5VebGAN0a

function merge(arr1, arr2) {
  var sortedArr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(merge([1, 2, 4], [3, 5, 8]));
console.log(mergeSort([1, 2, 4, 3, 5, 8]));

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
