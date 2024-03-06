const parse = require("csv-parse").parse;
const fs = require("fs");
const csvFilePath = "public/coordinates.csv";
const csvData = [];

export function Coordinates() {
  fs.createReadStream(csvFilePath)
    .pipe(
      parse({
        columns: true, // Automatically parse the header row and use it for object keys
        trim: true, // Trim spaces around values
        skip_empty_lines: true, // Skip empty lines
      })
    )
    .on("data", function (dataRow) {
      // Convert Latitude and Longitude to numbers
      dataRow.Latitude = parseFloat(dataRow.Latitude);
      dataRow.Longitude = parseFloat(dataRow.Longitude);
      csvData.push(dataRow);
    })
    .on("end", function () {
      console.log(csvData);
    });
}
