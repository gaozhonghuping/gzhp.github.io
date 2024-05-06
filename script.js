// Constants for HTML elements
const tableContainer = document.getElementById("table-container");
const excelTable = document.getElementById("excel-table");
const meiquButton = document.getElementById("meiqu-btn");
const yingquButton = document.getElementById("yingqu-btn");
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
          // Check if item is a string and ends with ".jpg"
          if (item.toLowerCase().endsWith(".jpg")) {
            tableContent += `<td><img src="${item}" alt="Image"></td>`;
          } else if(item.toLowerCase().endsWith(".jpeg")) {
            tableContent += `<td><img src="${item}" alt="Image"></td>`;
          } else {
            // Regular data cell
            tableContent += `<td>${item}</td>`;
          }
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

// Event listener for Meiqu button
meiqubtn.addEventListener("click", () => {
  loadDataFromJSON("meiqu.json");
  h1Element.textContent = "美区🇺🇸";
});

// Event listener for Yingqu button
yingqubtn.addEventListener("click", () => {
  loadDataFromJSON("yingqu.json");
  h1Element.textContent = "英区🇬🇧";
});

// Event listener for Aoqu button
aoqubtn.addEventListener("click", () => {
  loadDataFromJSON("aoqu.json");
  h1Element.textContent = "澳区🇦🇺";
});

// Event listener for Gangqu button
gangqubtn.addEventListener("click", () => {
  loadDataFromJSON("gangqu.json");
  h1Element.textContent = "港区🇭🇰";
});

// Event listener for Jiaqu button
jiaqubtn.addEventListener("click", () => {
  loadDataFromJSON("jiaqu.json");
  h1Element.textContent = "加区🇨🇦";
});

// Event listener for Zhongqu button
zhongqubtn.addEventListener("click", () => {
  loadDataFromJSON("zhongqu.json");
  h1Element.textContent = "中区🇨🇳";
});

// Event listener for Riqu button
riqubtn.addEventListener("click", () => {
  loadDataFromJSON("riqu.json");
  h1Element.textContent = "日区🇯🇵";
});

// Event listener for Maqu button
maqubtn.addEventListener("click", () => {
  loadDataFromJSON("maqu.json");
  h1Element.textContent = "马区🇲🇾";
});

// Event listener for Taiqu button
taiqubtn.addEventListener("click", () => {
  loadDataFromJSON("taiqu.json");
  h1Element.textContent = "台区🇹🇼";
});

// Event listener for Xinqu button
xinqubtn.addEventListener("click", () => {
  loadDataFromJSON("xinqu.json");
  h1Element.textContent = "新区🇸🇬";
});

// Event listener for Qita button
qitabtn.addEventListener("click", () => {
  loadDataFromJSON("qita.json");
  h1Element.textContent = "其他💗";
});

// Update sticky column positions on scroll
tableContainer.addEventListener("scroll", () => {
  const scrollTop = tableContainer.scrollTop;
  document.querySelectorAll(".sticky-column").forEach((column) => {
    column.style.transform = `translateY(${scrollTop}px)`;
  });
});
