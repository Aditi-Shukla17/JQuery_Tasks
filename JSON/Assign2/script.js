
$(document).ready(function() {
  function fetchPersonsData() {
    $.ajax({
      url: 'data.json',
      method: 'GET',
      dataType: 'json',
      success: function(arr) {
        var tablebody = $('#parent');
        $.each(arr, function(index, val) {
          var row = $('<tr></tr>');
          var cell = $('<td></td>').text(val.fname);
          row.append(cell);
          var cell1 = $('<td></td>').text(val.lname);
          row.append(cell1);
          var cell2 = $('<td></td>').text(val.dob);
          row.append(cell2);
          tablebody.append(row);
        });
      },
      error: function( error) {
        console.error('Error fetching the JSON data:', error);
      }
    });
  }

  fetchPersonsData();
});

// async function fetchPersonsData() {
//   try {
//     const response = await fetch("data.json");
//     const arr = await response.json();

//     let tablebody = document.getElementById("parent");
//     arr.forEach((val) => {
//       let row = document.createElement("tr");
//       let cell = document.createElement("td");
//       cell.textContent = val.fname;
//       row.appendChild(cell);

//       let cell1 = document.createElement("td");
//       cell1.textContent = val.lname;
//       row.appendChild(cell1);

//       let cell2 = document.createElement("td");
//       cell2.textContent = val.dob;
//       row.appendChild(cell2);

//       tablebody.appendChild(row);
//     });
//   } catch (error) {
//     console.error("Error fetching the JSON data:", error);
//   }
// }

// fetchPersonsData();