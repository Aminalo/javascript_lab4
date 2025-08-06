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


// PART 3: Transforming Data - Array of objects with lowercase keys

// Using table2 from Part 2 as input

// Step 1: Extract headers and convert to lowercase
let headers3 = table2[0].map(header => header.toLowerCase().trim());

// Step 2: Create new array for transformed objects
let transformedData3 = [];

// Step 3: Loop through data rows (skip headers)
for (let i = 1; i < table2.length; i++) {
  let row = table2[i];
  let rowObject = {};

  for (let j = 0; j < headers3.length; j++) {
    rowObject[headers3[j]] = row[j].trim();
  }

  transformedData3.push(rowObject);
}

// Output Part 3 result
console.log("\nPart 3: Transformed Array of Objects");
console.log(transformedData3);


//Part 4: Sorting and Manipulating Data
// Assuming transformedData3 from Part 3 is available

// Step 1: Sort the array by 'id' (numerically)
transformedData3.sort((a, b) => Number(a.id) - Number(b.id));

// Step 2: Remove the last element
transformedData3.pop();

// Step 3: Insert new object at index 1
transformedData3.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Step 4: Add new object at the end
transformedData3.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Step 5: Calculate average age using a loop
let totalAge = 0;
for (let i = 0; i < transformedData3.length; i++) {
  totalAge += Number(transformedData3[i].age);
}
let averageAge = totalAge / transformedData3.length;

// Output results
console.log("\nPart 4: Updated Array After Manipulations");
console.log(transformedData3);
console.log(`Average Age: ${averageAge.toFixed(2)}`);


// Part 5: Convert final data back to CSV format

// Step 1: Get headers from the keys of the first object
let csvHeaders5 = Object.keys(transformedData3[0]);

// Step 2: Create an array to store all CSV rows (start with header row)
let csvRows5 = [csvHeaders5.join(",")];

// Step 3: Loop through objects and turn each into a CSV row
for (let i = 0; i < transformedData3.length; i++) {
  let row = csvHeaders5.map(header => transformedData3[i][header]);
  csvRows5.push(row.join(","));
}

// Step 4: Join all rows with newline characters to get the final CSV string
let finalCSV5 = csvRows5.join("\n");

// Output
console.log("\nPart 5: Final CSV Format");
console.log(finalCSV5);
