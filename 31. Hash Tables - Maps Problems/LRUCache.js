// Leetcode - Problem List - Problem 146

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    var val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);

    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity)
      this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
}

// Explanation
var lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4

// Time Complexity - O(1)
// Space Complexity - O(n)
