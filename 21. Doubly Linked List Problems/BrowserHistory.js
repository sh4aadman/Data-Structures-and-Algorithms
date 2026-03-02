// Leetcode - Problem List - Problem 1472

class Site {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.current = new Site(homepage);
  }

  visit(url) {
    var newSite = new Site(url);
    this.current.next = newSite;
    newSite.prev = this.current;
    this.current = newSite;
  }

  back(steps) {
    while (steps > 0 && this.current.prev !== null) {
      this.current = this.current.prev;
      steps--;
    }
    return this.current.url;
  }

  forward(steps) {
    while (steps > 0 && this.current.next !== null) {
      this.current = this.current.next;
      steps--;
    }
    return this.current.url;
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

// Time Complexity - O(1) [visit] - O(<<steps>>) [back/forward]
// Space Complexity - O(n)
