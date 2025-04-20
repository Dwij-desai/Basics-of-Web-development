class shape {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  getarea() {
    return this.length * this.breadth;
  }
  checktype() {
    if (this.length == this.breadth) {
      return "Square";
    } else {
      return "Rectangle";
    }
  }
}

shape = new shape(10, 10);
console.log("=====================");
console.log(`Area: ${shape.getarea()}`);
console.log(`Type: ${shape.checktype()}`);
console.log("=====================");
