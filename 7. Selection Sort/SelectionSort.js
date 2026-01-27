// Selection Sort

// Sorting the minimum number first, then the larger numbers by looping through the array.

// https://youtube.com/shorts/HRwi5gwlB0U?si=GgfzoBvVANWyCShi

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([1, 4, 10, 2, 0]));

// Time Complexity - O(n ^ 2)
// Space Complexity - O(1)
