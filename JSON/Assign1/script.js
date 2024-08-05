async function fetchPersonData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const obj = await response.json();
    //console.log(obj);

    document.getElementById("fname").textContent = obj.fname;
    document.getElementById("lname").textContent = obj.lname;
    document.getElementById("dob").textContent = obj.dob;
  } catch (error) {
    console.error("Error fetching the JSON data:", error);
  }
}

fetchPersonData();





