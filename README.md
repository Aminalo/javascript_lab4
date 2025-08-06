## Part1 
CSV Parser Refactor – Part 1: Using Arrays and Objects
In this part of the assignment, I revisited my previous CSV parsing code from ALAB 308.3.1 (Part 3) and refactored it using arrays and objects to make it more organized and efficient.

# What I changed:
I split the CSV string by line breaks (\n) to separate each row of data.

I then used the first row to extract the column headers (e.g., "ID", "Name", "Occupation", "Age").

For each following row, I created a JavaScript object using the headers as keys and the values in the row as corresponding values.

All these objects were stored inside an array so that I can loop through them easily.

# What I built:
A clean data structure using an array of objects, where:

Each row is represented as a JavaScript object.

Each object has keys based on the headers and values based on the data from the CSV.

The full set of data is stored in one array.

# Why this is useful:
This makes the CSV data easier to manage, search, and display. It’s also closer to how data is structured in real-world applications like APIs or database queries.

## Part2
In this part of the project, I refactored my original CSV parser from ALAB 308.3.1 to make it more dynamic and scalable.

# What I changed:
Instead of hard-coding the number of columns (like always expecting 4), I now calculate the number of columns dynamically using the header row (first row of the CSV string).

I used the .split() method to separate each row and each cell inside the row.

I used .map() with .trim() to clean up extra white spaces in the values.

# What I built:
A two-dimensional array (array of arrays) where:

Each row of the CSV becomes an array.

The header row is stored at index 0.

All rows are included in one parent array for easy access.

I also saved the column count in a variable so that the program can work with any CSV file, not just files with 4 columns.

# Why this is useful:
This approach makes my code more flexible. Now I can reuse this script with different CSV files without having to change anything in the logic.


###  Part 3: Transforming Data

In this step, I took the 2D array from Part 2 and made the data more usable by converting each row into an object.

# What I changed:
- I extracted the headers from the first row and converted them to lowercase using `.toLowerCase()` for consistency.
- Then I looped over each data row and matched each value to the correct header key to form a JavaScript object.
- These objects were stored in a new array called `transformedData`.

# Why this helps:
By converting the data to objects, it's easier to work with. I can now access a value like `data[1].occupation` instead of needing to know it's at index 2. This makes the code cleaner, easier to read, and easier to use in future steps or projects.