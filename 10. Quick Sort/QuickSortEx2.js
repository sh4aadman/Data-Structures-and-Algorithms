var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

function strLength(a, b) {
  return a.length - b.length;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  }

  var swapIdx = start;
  var pivot = arr[start];

  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  for (var i = start + 1; i < arr.length; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([0, -10, 7, 4]));
console.log(quickSort(kitties, strLength));
