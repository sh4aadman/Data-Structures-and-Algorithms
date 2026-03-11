// Leetcode - Queue - Problem 3829

class Queues {
  constructor() {
    this.items = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(item) {
    this.items[this.last] = item;
    this.last++;
  }

  dequeue() {
    var item = this.items[this.first];
    delete this.items[this.first];
    this.first++;
    return item;
  }

  peek() {
    return this.items[this.first];
  }

  get length() {
    return this.last - this.first;
  }
}

class RideSharingSystem {
  constructor() {
    this.rider = new Queues();
    this.driver = new Queues();
    this.cancel = new Set();
  }

  addRider(riderId) {
    if (this.cancel.has(riderId)) {
      this.cancel.delete(riderId);
    }
    this.rider.enqueue(riderId);
  }

  addDriver(driverId) {
    this.driver.enqueue(driverId);
  }

  matchDriverWithRider() {
    while (this.rider.length > 0 && this.cancel.has(this.rider.peek())) {
      this.rider.dequeue();
    }

    if (this.rider.length > 0 && this.driver.length > 0) {
      var matchedRider = this.rider.dequeue();
      var matchedDriver = this.driver.dequeue();
      return [matchedDriver, matchedRider];
    }

    return [-1, -1];
  }

  cancelRider(riderId) {
    this.cancel.add(riderId);
  }
}

// Explanation
var rideSharingSystem = new RideSharingSystem(); // Initializes the system
console.log(rideSharingSystem.addRider(3)); // rider 3 joins the queue
console.log(rideSharingSystem.addDriver(2)); // driver 2 joins the queue
console.log(rideSharingSystem.addRider(1)); // rider 1 joins the queue
console.log(rideSharingSystem.matchDriverWithRider()); // returns [2, 3]
console.log(rideSharingSystem.addDriver(5)); // driver 5 becomes available
console.log(rideSharingSystem.cancelRider(3)); // rider 3 is already matched, cancel has no effect
console.log(rideSharingSystem.matchDriverWithRider()); // returns [5, 1]
console.log(rideSharingSystem.matchDriverWithRider()); // returns [-1, -1]

// Explanation
var rideSharingSystem2 = new RideSharingSystem(); // Initializes the system
console.log(rideSharingSystem2.addRider(8)); // rider 8 joins the queue
console.log(rideSharingSystem2.addDriver(8)); // driver 8 joins the queue
console.log(rideSharingSystem2.addDriver(6)); // driver 6 joins the queue
console.log(rideSharingSystem2.matchDriverWithRider()); // returns [8, 8]
console.log(rideSharingSystem2.addRider(2)); // rider 2 joins the queue
console.log(rideSharingSystem2.cancelRider(2)); // rider 2 cancels
console.log(rideSharingSystem2.matchDriverWithRider()); // returns [-1, -1]

// Time Complexity - O(1)
// Space Complexity - O(n)
