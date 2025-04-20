function printDetails(obj, template) {
  console.log(template(obj));
  console.log("-------------------------------------------------");
}

const student1 = {
  firstName: "Dwij",
  lastName: "Desai",
  age: 20,
  course: "BDA",
  semester: 4,
  subjects: ["ML", "DBMS", "OOP", "DAA", "SE"],
  marks: { ML: 85, DBMS: 90, OOP: 88, DAA: 80, SE: 75 },
  print() {
    printDetails(
      this,
      (obj) => `
      Name: ${obj.firstName} ${obj.lastName}
      Age: ${obj.age}
      Course: ${obj.course}
      Semester: ${obj.semester}
      Subjects: ${obj.subjects}
      Marks: ${Object.entries(obj.marks)
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ")}
    `
    );
  },
};

const myCar = {
  brand: "McLaren",
  model: "M1",
  color: "Orange",
  yearOfPurchase: 2022,
  ownerName: "Ender",
  type: "Sports",
  print() {
    printDetails(
      this,
      (obj) => `
      Brand: ${obj.brand}
      Model: ${obj.model}
      Color: ${obj.color}
      Year of Purchase: ${obj.yearOfPurchase}
      Owner Name: ${obj.ownerName}
      Type: ${obj.type}
    `
    );
  },
};

class Car {
  constructor(brand, model, color, yearOfPurchase, ownerName, type) {
    Object.assign(this, {
      brand,
      model,
      color,
      yearOfPurchase,
      ownerName,
      type,
    });
  }
  print() {
    myCar.print.call(this);
  }
}

class Student {
  constructor(firstName, lastName, age, course, semester, subjects, marks) {
    Object.assign(this, {
      firstName,
      lastName,
      age,
      course,
      semester,
      subjects,
      marks,
    });
  }
  print() {
    student1.print.call(this);
  }
}

student1.print();
myCar.print();
new Car("Toyota", "Corolla", "Black", 2021, "Dwij Desai", "Sedan").print();
new Student("Dwij", "Desai", 20, "BDA", 4, ["ML", "DBMS", "OOP", "DAA", "SE"], {
  ML: 85,
  DBMS: 90,
  OOP: 88,
  DAA: 80,
  SE: 75,
}).print();
