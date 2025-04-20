import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Task 1: Create directories
  fs.mkdirSync("folder_1");
  fs.mkdirSync(path.join("folder_1", "A"));
  fs.mkdirSync(path.join("folder_1", "A", "B"));
  console.log("Directories created successfully");

  // Task 2: Create files
  fs.writeFileSync(path.join("folder_1", "A.txt"), "");
  fs.writeFileSync(path.join("folder_1", "A", "B.txt"), "");
  fs.writeFileSync(path.join("folder_1", "A", "B", "C.txt"), "");
  console.log("Files created successfully");

  // Task 3: Write to files
  fs.writeFileSync(path.join("folder_1", "A.txt"), "inside A.txt");
  fs.writeFileSync(path.join("folder_1", "A", "B.txt"), "inside B.txt");
  fs.writeFileSync(path.join("folder_1", "A", "B", "C.txt"), "inside C.txt");
  console.log("Content written to files");

  // Task 4: Append to files
  [
    path.join("folder_1", "A.txt"),
    path.join("folder_1", "A", "B.txt"),
    path.join("folder_1", "A", "B", "C.txt"),
  ].forEach((p) => {
    fs.appendFileSync(p, ` and writing something in ${path.basename(p)}`);
  });
  console.log("Content appended to files");

  // Task 5: Read files
  console.log(
    "Reading A.txt:",
    fs.readFileSync(path.join("folder_1", "A.txt"), "utf8")
  );
  console.log(
    "Reading B.txt:",
    fs.readFileSync(path.join("folder_1", "A", "B.txt"), "utf8")
  );
  console.log(
    "Reading C.txt:",
    fs.readFileSync(path.join("folder_1", "A", "B", "C.txt"), "utf8")
  );

  // Task 6: Get file stats
  console.log("Stats for A.txt:", fs.statSync(path.join("folder_1", "A.txt")));
  console.log(
    "Stats for B.txt:",
    fs.statSync(path.join("folder_1", "A", "B.txt"))
  );
  console.log(
    "Stats for C.txt:",
    fs.statSync(path.join("folder_1", "A", "B", "C.txt"))
  );

  // Task 7: Rename files
  fs.renameSync(path.join("folder_1", "A.txt"), path.join("folder_1", "X.txt"));
  fs.renameSync(
    path.join("folder_1", "A", "B.txt"),
    path.join("folder_1", "A", "Y.txt")
  );
  fs.renameSync(
    path.join("folder_1", "A", "B", "C.txt"),
    path.join("folder_1", "A", "B", "Z.txt")
  );
  console.log("Files renamed successfully");

  // Task 8: Delete files and folders
  [
    path.join("folder_1", "X.txt"),
    path.join("folder_1", "A", "Y.txt"),
    path.join("folder_1", "A", "B", "Z.txt"),
  ].forEach((p) => fs.existsSync(p) && fs.unlinkSync(p));

  [
    path.join("folder_1", "A", "B"),
    path.join("folder_1", "A"),
    "folder_1",
  ].forEach((p) => fs.rmdirSync(p));
  console.log("All files and folders deleted successfully");
} catch (error) {
  console.error("An error occurred:", error);
}

