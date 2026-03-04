// Leetcode - Problem List - Problem 1797

class AuthenticationManager {
  constructor(timeToLive) {
    this.timeToLive = timeToLive;
    this.tokens = new Map();
  }

  generate(tokenId, currentTime) {
    this.tokens.set(tokenId, currentTime + this.timeToLive);
  }

  renew(tokenId, currentTime) {
    var expiry = this.tokens.get(tokenId);

    if (expiry && expiry > currentTime) {
      this.tokens.set(tokenId, currentTime + this.timeToLive);
    }
  }

  countUnexpiredTokens(currentTime) {
    var count = 0;

    for (var expires of this.tokens.values()) {
      if (expires > currentTime) {
        count++;
      }
    }

    return count;
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

// Time Complexity - O(1) [generate/renew] - O(n) [countUnexpiredTokens]
// Space Complexity - O(1)

// In a real-world scenario with millions of tokens, the O(N) countUnexpiredTokens method would be too slow. To optimize this, it could be used a Doubly Linked List or a Min-Priority Queue to keep tokens sorted by their expiry time.
