// Constants for HTML elements
const tableContainer = document.getElementById("table-container");
const excelTable = document.getElementById("excel-table");
const h1Element = document.querySelector("h1");

// Load Meiqu data by default
loadDataFromJSON("meiqu.json");

// Function to load JSON data from file
function loadDataFromJSON(filename) {
  tableContainer.scrollLeft = 0;
  tableContainer.scrollTop = 0;

  fetch(filename)
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
      generateTableFromJSON();
    })
    .catch((error) => console.error("Error loading JSON data:", error));
}

// Function to generate table from JSON data
function generateTableFromJSON() {
  let tableContent = "";
  let rowNum = 1; // Counter for row numbers

  // Calculate the maximum number of items in any row
  const maxItems = Math.max(
    ...jsonData.map((obj) => Object.values(obj).flatMap((arr) => arr.length)),
  );

  jsonData.forEach((obj) => {
    for (const title in obj) {
      if (Object.hasOwnProperty.call(obj, title)) {
        // Start new row for each title and its content
        tableContent += "<tr>";
        // Add row number column with a custom class
        tableContent += `<td class="row-number">${rowNum}</td>`;
        rowNum++; // Increment row number counter
        // Title in second column
        tableContent += `<td><strong>${title}</strong></td>`;
        // Content in subsequent columns
        obj[title].forEach((item) => {
          tableContent += `<td>${item}</td>`;
        });
        // Add empty cells if the row is not long enough
        for (let i = obj[title].length; i < maxItems; i++) {
          tableContent += "<td></td>";
        }
        tableContent += "</tr>";
      }
    }
  });

  document.getElementById("excel-table").innerHTML = tableContent;
}

// Update sticky column positions on scroll
tableContainer.addEventListener("scroll", () => {
  const scrollTop = tableContainer.scrollTop;
  document.querySelectorAll(".sticky-column").forEach((column) => {
    column.style.transform = `translateY(${scrollTop}px)`;
  });
});