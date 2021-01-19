// from data.js
var tableData = data;

// reference table body
var tbody=d3.select("tbody");

// loop through data for values and table append
tableData.forEach((ufoSighting)=> {
    console.log(ufoSighting)

    var row=tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value])=> {
        console.log(key, value);

        var cell=row.append("td");
        cell.text(value);
    });
})