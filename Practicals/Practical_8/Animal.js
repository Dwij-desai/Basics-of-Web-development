// Parent object Animal with common properties
let Animal = {
  nature: "wild",
  weight: 10,
  habitat: "jungle",
  lifeSpan: 10,
  makeSound: function () {
    return "Some animal sound";
  },
};

// Create Dog object inheriting from Animal
let Dog = Object.create(Animal);
// Add Dog specific properties
Dog.breed = "Labrador";
Dog.owner = "Johnny";
Dog.nature = "domestic"; // Override parent property
Dog.makeSound = function () {
  return "Woof!";
};

// Create Tiger object inheriting from Animal
let Tiger = Object.create(Animal);
// Add Tiger specific properties
Tiger.stripePattern = "striped";
Tiger.weight = 200; // Override parent property
Tiger.makeSound = function () {
  return "Roar!";
};

// Test the inheritance
console.log("=== Dog Properties ===");
console.log(Dog);
console.log("Dog sound:", Dog.makeSound());

console.log("\n=== Tiger Properties ===");
console.log(Tiger);
console.log("Tiger sound:", Tiger.makeSound());

console.log("\n=== Inherited Properties ===");
console.log("Dog habitat:", Dog.habitat);
console.log("Tiger lifeSpan:", Tiger.lifeSpan);
