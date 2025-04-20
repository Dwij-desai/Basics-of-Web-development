// let ary = ["ender", "Dwij", 20, "owan", { ender: "Dwij", age: 20 }];
// let obj = {
//   ender: "Dwij",
//   age: 20,
// };

// console.log(obj["ender"]);

// // ary.pop();

// console.log(ary[4]);
// console.log("\nLength of array: ", ary.length);

// ary.push("28-01-2005");
// console.log(ary);
/////////////////////////////////////////////////////////////////////////////
// let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = Arr.slice(2, 7);

// console.log(newArr);

// Arr.join("-");

// let a = "Ender";

// let b = a.substring(1, 3);

// console.log(b);
/////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];
// [1, 2, 5];
// // sintax:- splice (start indexedB, count remove, element to add in array)
// // arr.splice(2, 2);

// arr.splice(2, 1, 10, 20, 30);
// console.log(arr);
// console.log(arr.join(" "));

/////////////////////////////////////////////////////////////////////////////
// let str = "Ender";
// let words = str.split("n");

// console.log(words);
/////////////////////////////////////////////////////////////////////////////
let arr = [1, 35, 47, 23, 12, 33, 22, 44];
console.log("Orignal: ", arr.join(" "));
arr.sort();
console.log("Dictionary sorting: ", arr.join(" "));

arr.sort((a, b) => {
  return a - b;
});
console.log("Incresing: ", arr.join(" "));

arr.sort((a, b) => {
  return b - a;
});
console.log("decrese: ", arr.join(" "));
/////////////////////////////////////////////////////////////////////////////

let obj = {
  v: (a, b) => {
    return a + b;
  },
  v1: (a, b) => a - b,
};

console.log(obj.v(1, 2));
