function addRow() {
  const container = document.getElementById("image-container");
  const rowCount = container.children.length;

  const newRow = document.createElement("div");
  newRow.className = "image-row";

  const fileInput = document.createElement("input");
  fileInput.type = "file";

  const select = document.createElement("select");
  select.innerHTML = `
      <option value="primary">Primary Image</option>
      <option value="secondary">Secondary Image</option>
    `;

  const removeLink = document.createElement("a");
  removeLink.href = "#";
  removeLink.className = "remove";
  removeLink.textContent = "Remove";
  removeLink.onclick = function () {
    removeRow(this);
  };

  newRow.appendChild(fileInput);
  newRow.appendChild(select);
  newRow.appendChild(removeLink);

  container.appendChild(newRow);
  updatePrimaryOptions();
}

function removeRow(link) {
  const container = document.getElementById("image-container");
  container.removeChild(link.parentNode);
  updatePrimaryOptions();
}

function updatePrimaryOptions() {
  const container = document.getElementById("image-container");
  const rows = container.getElementsByClassName("image-row");
  let primarySelected = false;

  Array.from(rows).forEach((row) => {
    const select = row.getElementsByTagName("select")[0];
    const primaryOption = select.options[0];
    const secondaryOption = select.options[1];

    if (primaryOption.selected) {
      if (primarySelected) {
        primaryOption.disabled = true;
        secondaryOption.selected = true;
      } else {
        primarySelected = true;
        primaryOption.disabled = false;
      }
    } else {
      primaryOption.disabled = primarySelected;
    }
  });
}

document.addEventListener("DOMContentLoaded", updatePrimaryOptions);
