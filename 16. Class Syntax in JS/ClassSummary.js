// Class are blueprints that when created make objects known as instances.

// Classes are created with the new keyword.

// The constructor function is a special function that gets run when the class in instantiated.

// Instance methods can be added to classes similar to methods in objects.

// Class methods can be added using the static keyword.

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students) {
    return "ENROLLING!";
  }
}

let firstStudent = new Student("Cristiano", "Ronaldo");
let secondStudent = new Student("Lionel", "Messi");

console.log(Student.enrollStudents(firstStudent, secondStudent));

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
