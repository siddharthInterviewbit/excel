document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("spreadsheet-container");

  function createSpreadsheet(rows, cols) {
    const table = document.createElement("table");
    table.id = "spreadsheet";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Empty top-left cell
    headerRow.appendChild(document.createElement("th"));

    // Create column headers (A, B, C, ...)
    for (let col = 0; col < cols; col++) {
      const th = document.createElement("th");
      th.innerText = String.fromCharCode(65 + col);
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    // Create rows and cells
    for (let row = 0; row < rows; row++) {
      const tr = document.createElement("tr");
      const rowHeader = document.createElement("th");
      rowHeader.innerText = row + 1;
      tr.appendChild(rowHeader);

      for (let col = 0; col < cols; col++) {
        const td = document.createElement("td");
        td.contentEditable = "true";
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    container.appendChild(table);

    // Add event listener for cell changes
    table.addEventListener("input", (event) => {
      const target = event.target;
      if (target.tagName === "TD" && target.isContentEditable) {
        console.log(
          `Cell at row ${target.parentElement.rowIndex}, column ${target.cellIndex} changed to ${target.innerText}`
        );
      }
    });
  }

  createSpreadsheet(10000000, 5); // Create a spreadsheet with 10 rows and 5 columns
});
