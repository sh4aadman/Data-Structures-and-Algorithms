// Leetcode - Problem List - Problem 1797

class Node {
  constructor(key, expiry) {
    this.key = key;
    this.expiry = expiry;

    this.next = null;
    this.prev = null;
  }
}

class AuthenticationManager {
  constructor(timeToLive) {
    this.timeToLive = timeToLive;
    this.tokens = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToTail(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  generate(tokenId, currentTime) {
    var newNode = new Node(tokenId, currentTime + this.timeToLive);

    this.tokens.set(tokenId, newNode);
    this.addToTail(newNode);
  }

  renew(tokenId, currentTime) {
    if (!this.tokens.has(tokenId)) return;

    var node = this.tokens.get(tokenId);

    if (node.expiry <= currentTime) {
      this.remove(node);
      this.tokens.delete(tokenId);
    }

    this.remove(node);
    this.addToTail(node);
  }

  countUnexpiredTokens(currentTime) {
    var current = this.head.next;

    while (current !== this.tail && current.expiry <= currentTime) {
      this.tokens.delete(current.key);
      this.remove(current);
      current = this.head.next;
    }

    return this.tokens.size;
  }
}

// Explanation
var authenticationManager = new AuthenticationManager(5); // Constructs the AuthenticationManager with timeToLive = 5 seconds.
console.log(authenticationManager.renew("aaa", 1)); // No token exists with tokenId "aaa" at time 1, so nothing happens.
console.log(authenticationManager.generate("aaa", 2)); // Generates a new token with tokenId "aaa" at time 2.
console.log(authenticationManager.countUnexpiredTokens(6)); // The token with tokenId "aaa" is the only unexpired one at time 6, so return 1.
console.log(authenticationManager.generate("bbb", 7)); // Generates a new token with tokenId "bbb" at time 7.
console.log(authenticationManager.renew("aaa", 8)); // The token with tokenId "aaa" expired at time 7, and 8 >= 7, so at time 8 the renew request is ignored, and nothing happens.
console.log(authenticationManager.renew("bbb", 10)); // The token with tokenId "bbb" is unexpired at time 10, so the renew request is fulfilled and now the token will expire at time 15.
console.log(authenticationManager.countUnexpiredTokens(15)); // The token with tokenId "bbb" expires at time 15, and the token with tokenId "aaa" expired at time 7, so currently no token is unexpired, so return 0.

// Time Complexity - O(1) [generate/renew] - O(k) [countUnexpiredTokens(only k expired tokens)]
// Space Complexity - O(n)
