$(document).ready(function () {
  function addRow() {
    const $container = $("#image-container");
    const $newRow = $("<div>").addClass("image-row");

    const $file = $("<input>").attr("type", "file");

    const $select = $("<select>").html(`
      <option value="primary">Primary Image</option>
      <option value="secondary" selected>Secondary Image</option>
    `);

    $select.on("change", function () {
      updatePrimary();
    });

    const $remove = $("<a>")
      .attr("href", "#")
      .addClass("remove")
      .text("Remove");
    $remove.on("click", function (e) {
      e.preventDefault();
      removeRow($(this));
    });

    $newRow.append($file, $select, $remove);
    $container.append($newRow);

    updatePrimary();
  }

  function removeRow($link) {
    $link.closest(".image-row").remove();
    updatePrimary();
  }

  function updatePrimary() {
    const $rows = $("#image-container .image-row");
    let primarySelected = false;

    // Check if any select element has value "primary"
    $rows.each(function () {
      const $select = $(this).find("select");
      if ($select.val() === "primary") {
        primarySelected = true;
      }
    });

    // If no primary is selected, set the first select element to "primary"
    if (!primarySelected && $rows.length > 0) {
      $rows.first().find("select").val("primary");
      primarySelected = true;  // Set flag to true as we have selected primary
    }

    // Ensure only one primary image is selected
    $rows.each(function () {
      const $select = $(this).find("select");
      $select.off("change").on("change", function () {
        if ($(this).val() === "primary") {
          $rows.find("select").each(function () {
            if ($(this).get(0) !== $select.get(0)) {
              $(this).val("secondary");
            }
          });
        } else {
          // If this was the only primary and it changed to secondary, ensure at least one primary
          if (!$rows.find("select").filter(function() { return $(this).val() === "primary"; }).length) {
            $rows.first().find("select").val("primary");
          }
        }
      });
    });
  }

  updatePrimary();

  $("#add-row-button").on("click", function () {
    addRow();
  });
});
