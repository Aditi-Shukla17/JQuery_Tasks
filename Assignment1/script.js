$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();

    let email = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    let agree = $("#agree").is(":checked");

    if (email === "") {
      alert("Email is required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("Please agree to terms and conditions.");
      return;
    }

    alert("Form submitted successfully!");
  });
});
