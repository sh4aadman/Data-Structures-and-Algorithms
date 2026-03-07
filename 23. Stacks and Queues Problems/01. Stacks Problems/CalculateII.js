// Leetcode - Problem List - Problem 227

function calculate(s) {
  var stack = [];
  var currentNumber = 0;
  var operation = "+";

  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + (char - "0");
    }

    if ((isNaN(char) && char !== " ") || i === s.length - 1) {
      var val = 0;

      if (operation === "+") {
        val = currentNumber;
        stack.push(val);
      }
      if (operation === "-") {
        val = -currentNumber;
        stack.push(val);
      }
      if (operation === "*") {
        val = stack.pop() * currentNumber;
        stack.push(val);
      }
      if (operation === "/") {
        val = Math.trunc(stack.pop() / currentNumber);
        stack.push(val);
      }

      operation = char;
      currentNumber = 0;
    }
  }

  return stack.reduce((sum, curr) => sum + curr);
}

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));

// Time Complexity - O(n)
// Space Complexity - O(n) [stack] / O(1) [without-stack]

function calculate(s) {
  var currentNumber = 0;
  var lastNumber = 0;
  var result = 0;
  var operation = "+";

  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + (char - "0");
    }

    if ((isNaN(char) && char !== " ") || i === s.length - 1) {
      if (operation === "+" || operation === "-") {
        result += lastNumber;
        lastNumber = operation === "+" ? currentNumber : -currentNumber;
      } else if (operation === "*") {
        lastNumber = lastNumber * currentNumber;
      } else if (operation === "/") {
        lastNumber = Math.trunc(lastNumber / currentNumber);
      }
      operation = char;
      currentNumber = 0;
    }
  }
  result += lastNumber;
  return result;
}
