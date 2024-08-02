
$(document).ready(function () {
  // Parent-Child 1
  $("#parent1").change(function () {
    let isChecked = $(this).is(":checked");
    $(".child").prop("checked", isChecked);
  });

  $(".child").change(function () {
    let allChecked = $(".child").length === $(".child:checked").length;
    let anyChecked = $(".child:checked").length > 0;
    $("#parent1").prop("checked", allChecked || anyChecked);
  });

  // Parent-Child 2
  $("#parent2").change(function () {
    let isChecked = $(this).is(":checked");
    $(".child1").prop("checked", isChecked);
  });

  $(".child1").change(function () {
    let allChecked = $(".child1").length === $(".child1:checked").length;
    let anyChecked = $(".child1:checked").length > 0;
    $("#parent2").prop("checked", allChecked || anyChecked);
  });

  // Parent-Child 3
  $("#parent3").change(function () {
    let isChecked = $(this).is(":checked");
    $(".child2").prop("checked", isChecked);
  });

  $(".child2").change(function () {
    let allChecked = $(".child2").length === $(".child2:checked").length;
    let anyChecked = $(".child2:checked").length > 0;
    $("#parent3").prop("checked", allChecked || anyChecked);
  });

  // Parent-Child 4
  $("#parent4").change(function () {
    let isChecked = $(this).is(":checked");
    $(".child3").prop("checked", isChecked);
  });

  $(".child3").change(function () {
    let allChecked = $(".child3").length === $(".child3:checked").length;
    let anyChecked = $(".child3:checked").length > 0;
    $("#parent4").prop("checked", allChecked || anyChecked);
  });
});


// $(document).ready(function() {
//   // Parent checkbox changes
//   $('.parent').change(function() {
//     let parentClass = $(this).attr('id');
//     $('.' + parentClass).prop('checked', $(this).prop('checked'));
//   });

//   // Child checkboxes change
//   $('.child').change(function() {
//     let parentClass = $(this).attr('class').split(' ')[0];
//     let allChecked = $('.' + parentClass + '.child').length === $('.' + parentClass + '.child:checked').length;
//     $('#' + parentClass).prop('checked', allChecked);
//   });
// });
