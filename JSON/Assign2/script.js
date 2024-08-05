
async function fetchPersonsData() {
  try {
    const response = await fetch("data.json");
    const arr = await response.json();

    let tablebody = document.getElementById("parent");
    arr.forEach((val) => {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.textContent = val.fname;
      row.appendChild(cell);

      let cell1 = document.createElement("td");
      cell1.textContent = val.lname;
      row.appendChild(cell1);

      let cell2 = document.createElement("td");
      cell2.textContent = val.dob;
      row.appendChild(cell2);

      tablebody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching the JSON data:", error);
  }
}

fetchPersonsData();

