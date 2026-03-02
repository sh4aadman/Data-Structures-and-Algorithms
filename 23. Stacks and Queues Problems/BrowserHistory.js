// Leetcode - Problem List - Problem 1472

class BrowserHistory {
  constructor(homepage) {
    this.stack = [homepage];
    this.cursor = 0;
  }

  visit(url) {
    this.stack.length = this.cursor + 1;
    this.stack.push(url);
    this.cursor++;
  }

  back(steps) {
    this.cursor = Math.max(this.cursor - steps, 0);
    return this.stack[this.cursor];
  }

  forward(steps) {
    this.cursor = Math.min(this.stack.length - 1, this.cursor + steps);
    return this.stack[this.cursor];
  }
}

// Explanation
var browserHistory = new BrowserHistory("leetcode.com");
console.log(browserHistory.visit("google.com")); // You are in "leetcode.com". Visit "google.com"
console.log(browserHistory.visit("facebook.com")); // You are in "google.com". Visit "facebook.com"
console.log(browserHistory.visit("youtube.com")); // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
console.log(browserHistory.visit("linkedin.com")); // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7)); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

// Time Complexity - O(1)
// Space Complexity - O(n) [visit] - O(1) [back/forward]
