import fs from "fs";

fs.mkdir("folder_2", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Directory created successfully");
  }
});
// here call back fuction is arrow fuction
fs.writeFile(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_2/B.txt",
  "Hello World",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File created successfully");
    }
  }
);

fs.appendFile(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_2/B.txt",
  ",I am learning Node.js",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File updated successfully");
    }
  }
);

fs.readFile(
  "/Users/dwijdesai/Desktop/FET/Practical_12/folder_2/B.txt",
  "utf-8",
  (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
);

fs.rmd
