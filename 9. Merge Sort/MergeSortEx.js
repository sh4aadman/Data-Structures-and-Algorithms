// Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.


// const comparator = (a, b) => a - b; returns negative value when ascending
// const comparator = (a, b) => a - b; returns positive value when descending


var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

function merge(arr1, arr2, comparator) {
    let i = 0;
    let j = 0;
    let sorted = [];
    while (i < arr1.length && j < arr2.length) {
        if (typeof comparator !== 'function') {
            if (arr1[i] <= arr2[j]) {
                sorted.push(arr1[i]);
                i++;
            } else {
                sorted.push(arr2[j]);
                j++;
            }
        } else {
            if (comparator(arr1[i], arr2[j]) <= 0) {
                sorted.push(arr1[i]);
                i++;
            } else {
                sorted.push(arr2[j]);
                j++;
            }
        }
    }

    // Concatenation - arr.concat() - returns a new string with concatenating (added) values
    if (i < arr1.length) {
        sorted = sorted.concat(arr1.slice(i, arr1.length));
    }
    if (j < arr2.length) {
        sorted = sorted.concat(arr2.slice(j, arr2.length));
    }
    
    return sorted;
}

console.log(merge(names, otherNames, stringLengthComparator));

// Time Complexity - O(n + m)
// Space Complexity - O(n + m)