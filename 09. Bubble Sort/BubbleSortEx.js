// Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    // providing a default Bubble Sort Algorithm
    var noSwap;
    for (var i = arr.length; i > 0; i--) {
      noSwap = true;
      for (var j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
    return arr;
    }
    
    // Sorting with defined comparator
    return arr.sort(comparator);
}

console.log(bubbleSort(kitties, strComp));
console.log(bubbleSort(moarKittyData, oldestToYoungest));

