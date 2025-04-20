import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function performFileOperations() {
  try {
    // Task 1: Create directories
    await fs.mkdir("folder_1");
    await fs.mkdir(path.join("folder_1", "A"));
    await fs.mkdir(path.join("folder_1", "A", "B"));
    console.log("Directories created successfully");

    // Task 2: Create files
    await fs.writeFile(path.join("folder_1", "A.txt"), "");
    await fs.writeFile(path.join("folder_1", "A", "B.txt"), "");
    await fs.writeFile(path.join("folder_1", "A", "B", "C.txt"), "");
    console.log("Files created successfully");

    // Task 3: Write to files
    await fs.writeFile(path.join("folder_1", "A.txt"), "inside A.txt");
    await fs.writeFile(path.join("folder_1", "A", "B.txt"), "inside B.txt");
    await fs.writeFile(
      path.join("folder_1", "A", "B", "C.txt"),
      "inside C.txt"
    );
    console.log("Content written to files");

    // Task 4: Append to files
    await fs.appendFile(
      path.join("folder_1", "A.txt"),
      " and writing something in A.txt"
    );
    await fs.appendFile(
      path.join("folder_1", "A", "B.txt"),
      " and writing something in B.txt"
    );
    await fs.appendFile(
      path.join("folder_1", "A", "B", "C.txt"),
      " and writing something in C.txt"
    );
    console.log("Content appended to files");

    // Task 5: Read files
    console.log(
      "Reading A.txt:",
      await fs.readFile(path.join("folder_1", "A.txt"), "utf8")
    );
    console.log(
      "Reading B.txt:",
      await fs.readFile(path.join("folder_1", "A", "B.txt"), "utf8")
    );
    console.log(
      "Reading C.txt:",
      await fs.readFile(path.join("folder_1", "A", "B", "C.txt"), "utf8")
    );

    // Task 6: Get file stats
    console.log(
      "Stats for A.txt:",
      await fs.stat(path.join("folder_1", "A.txt"))
    );
    console.log(
      "Stats for B.txt:",
      await fs.stat(path.join("folder_1", "A", "B.txt"))
    );
    console.log(
      "Stats for C.txt:",
      await fs.stat(path.join("folder_1", "A", "B", "C.txt"))
    );

    // Task 7: Rename files
    await fs.rename(
      path.join("folder_1", "A.txt"),
      path.join("folder_1", "X.txt")
    );
    await fs.rename(
      path.join("folder_1", "A", "B.txt"),
      path.join("folder_1", "A", "Y.txt")
    );
    await fs.rename(
      path.join("folder_1", "A", "B", "C.txt"),
      path.join("folder_1", "A", "B", "Z.txt")
    );
    console.log("Files renamed successfully");

    // Task 8: Delete files and folders
    await fs.unlink(path.join("folder_1", "X.txt"));
    await fs.unlink(path.join("folder_1", "A", "Y.txt"));
    await fs.unlink(path.join("folder_1", "A", "B", "Z.txt"));
    await fs.rmdir(path.join("folder_1", "A", "B"));
    await fs.rmdir(path.join("folder_1", "A"));
    await fs.rmdir("folder_1");
    console.log("All files and folders deleted successfully");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

performFileOperations();
