function fetchPersonData() {
  $.ajax({
    url: 'data.json',
    method: 'GET',
    dataType: 'json',
    success: function (obj) {
      $('#fname').text(obj.fname);
      //console.log(obj.fname)
      $('#lname').text(obj.lname);
      $('#dob').text(obj.dob);
    },
    error: function ( textStatus) {
      console.error("Error fetching the JSON data:", textStatus);
    }
  });
}

$(document).ready(function () {
  fetchPersonData();
});


// async function fetchPersonData() {
//   try {
//     const response = await fetch("data.json");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const obj = await response.json();
//     //console.log(obj);

//     document.getElementById("fname").textContent = obj.fname;
//     document.getElementById("lname").textContent = obj.lname;
//     document.getElementById("dob").textContent = obj.dob;
//   } catch (error) {
//     console.error("Error fetching the JSON data:", error);
//   }
// }

// fetchPersonData();