$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    const agree = $("#agree").is(":checked");

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
