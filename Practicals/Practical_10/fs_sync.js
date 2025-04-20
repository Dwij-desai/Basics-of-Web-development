import fs from "fs";

fs.mkdirSync("/Users/dwijdesai/Desktop/FET/Practical_12/folder_1/");

fs.writeFileSync(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_1/A.txt",
  "Hello World"
);
fs.appendFileSync(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_1/A.txt",
  ",I am learning Node.js"
);

let incomingdata = fs.readFileSync(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_1/A.txt",
  "utf-8"
);
console.log(incomingdata);

fs.rmdirSync("folder_1");
