$(document).ready(function () {
  $("#anchor").click(function (event) {
      event.preventDefault();
    alert("You clicked on anchor tag");
    event.stopPropagation();
  });

  $("#anchor").hover(
    function () {
      alert("You hover mouse on anchor tag");
    },
    function () {
      alert("You out from anchor tag");
    }
  );

//   $("#anchor").focus(function () {
//     alert("You focus on anchor tag");
//   });
});
