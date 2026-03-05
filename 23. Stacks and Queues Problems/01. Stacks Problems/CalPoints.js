// Leetcode - Problem List - Problem 682

function calPoints(operations) {
  var stack = [];
  var totalSum = 0;

  for (var i = 0; i < operations.length; i++) {
    var op = operations[i];

    switch (op) {
      case "+":
        var sum = stack[stack.length - 1] + stack[stack.length - 2];
        stack.push(sum);
        totalSum += sum;
        break;
      case "D":
        var doubled = stack[stack.length - 1] * 2;
        stack.push(doubled);
        totalSum += doubled;
        break;
      case "C":
        var removed = stack.pop();
        totalSum -= removed;
        break;
      default:
        var score = parseInt(op);
        stack.push(score);
        totalSum += score;
        break;
    }
  }

  return totalSum;
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));

// Time Complexity - O(n)
// Space Complexity - O(n)
