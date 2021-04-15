// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Dynamic Tables
function buildTable(data) {
    // first, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // Add forEach function
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow
        //Add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );

    });
}

