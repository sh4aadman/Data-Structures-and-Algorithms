// Leetcode - Problem List - Problem 224

function calculate(s) {
  var stack = [];
  var res = 0;
  var sign = 1;

  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    if (char >= "0" && char <= "9") {
      var num = 0;

      while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + (s[i] - "0");
        i++;
      }

      res += sign * num;
      i--;
    } else if (char === "+") {
      sign = 1;
    } else if (char === "-") {
      sign = -1;
    } else if (char === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (char === ")") {
      res *= stack.pop();
      res += stack.pop();
    }
  }

  return res;
}

console.log(calculate("1 + 1"));
console.log(calculate(" 2-1 + 2 "));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));

// Time Complexity - O(n)
// Space Complexity - O(n)
