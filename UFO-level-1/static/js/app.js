// from data.js
var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// loop through data for values and table append
tableData.forEach((ufoSighting) => {
    console.log(ufoSighting)

    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// select submit button
var submit = d3.select("#filter-btn");

//click event
submit.on("click", function() {
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dateTime=d3.select("#datetime").property("value");
    console.log(dateTime);

    var filteredData = tableData.filter(sighting => sighting.datetime === dateTime);
    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            console.log(key, value);

            var cell=row.append("td");
            cell.text(value);
        });
    });
})


