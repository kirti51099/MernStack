const fs = require("fs");

//  Create a file
fs.writeFile("sample.txt", "Hello, this is a sample file.", (err) => {
  if (err) {
    console.log("Error creating file:", err);
  } else {
    console.log("File created successfully!");
  }
});

// 2 Read a file
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});











// 3 Append data to file
fs.appendFile("sample.txt", "\nAppending some more text.", (err) => {
  if (err) {
    console.log("Error appending file:", err);
  } else {
    console.log("Data appended successfully!");
  }
});