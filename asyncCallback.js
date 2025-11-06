// asyncCallback.js

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("Reading file...");
