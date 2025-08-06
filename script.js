// PART 1: Refactoring Old Code into Objects

let csv1 = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";

// Step 1: Split CSV string into rows
let rows1 = csv1.split("\n");

// Step 2: Get headers from the first row
let headers1 = rows1[0].split(",").map(header => header.trim());

// Step 3: Create an array to hold data objects
let dataObjects1 = [];

// Step 4: Loop through remaining rows and build objects
for (let i = 1; i < rows1.length; i++) {
  let values = rows1[i].split(",").map(value => value.trim());

  let rowObject = {
    [headers1[0]]: values[0],
    [headers1[1]]: values[1],
    [headers1[2]]: values[2],
    [headers1[3]]: values[3],
  };

  dataObjects1.push(rowObject);
}

// Output Part 1 result
console.log("Part 1: Array of objects");
console.log(dataObjects1);



// PART 2: Expanding Functionality - Dynamic columns and 2D array

let csv2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 1: Split CSV into rows
let rows2 = csv2.split("\n");

// Step 2: Create 2D array table dynamically
let table2 = [];

for (let i = 0; i < rows2.length; i++) {
  let row = rows2[i].split(",").map(cell => cell.trim());
  table2.push(row);
}

// Step 3: Calculate number of columns dynamically
let columnCount2 = table2[0].length;

// Output Part 2 result
console.log("\nPart 2: 2D Array Table");
console.log(table2);
console.log("Number of columns:", columnCount2);



