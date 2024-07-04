const fs = require("fs").promises; // Use promises for asynchronous operations
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "myFile.txt");

async function readFile() {
  try {
    // Read the file content
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile();

// Example of path manipulation using path module
const newFilePath = path.join(__dirname, "data", "processed_file.txt");
console.log("New file path:", newFilePath);
