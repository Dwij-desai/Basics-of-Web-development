Array.prototype.sumOfArray = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    // sum += this[i];
    if (typeof this[i] === "number") {
      sum = sum + this[i];
    }
  }
  console.log(`Sum of (${this}) is ${sum}`);
};

let arr = [1, 2, 3, 4, 5];
arr.sumOfArray();
console.log("=====================");
let brr = [10, 20, 30, 40, 50, true, "Kashish", "Ender"];
brr.sumOfArray();

// /////////////////////note///////////////////////
// //  == says only data will be checked
// console.log(34 == "34"); // true
// //  === says data and datatype will be checked
// console.log(34 === "34"); // false
