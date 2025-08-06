// CSV string input
let csv = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";

// Step 1: Split CSV string into rows
let rows = csv.split("\n");

// Step 2: Get headers from the first row (columns names)
let headers = rows[0].split(",").map(header => header.trim());

// Step 3: Create an array to hold all data objects
let data = [];

// Step 4: Loop through the remaining rows and build objects
for (let i = 1; i < rows.length; i++) {
  let values = rows[i].split(",").map(value => value.trim());

  // Create an object for this row
  let rowObject = {
    [headers[0]]: values[0],
    [headers[1]]: values[1],
    [headers[2]]: values[2],
    [headers[3]]: values[3]
  };

  // Add the object to the array
  data.push(rowObject);
}

// ✅ Final output - loop and log each row
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}