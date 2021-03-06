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

// Clickable button
function handleClick() { 
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered
    //Filter data using that date
    if (date) {
        //Apply filter to the table data to keep
        //rows where datetime value match filter value
        filteredData = filteredData.filter(row => row.datetime === date);

    };

    //Rebuild the table using the filtered date
    //If not data entered, then filteredData will be original tableData
    buildTable(filteredData);
}

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);
    

