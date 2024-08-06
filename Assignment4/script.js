$(document).ready(function () {
  initialize();
  $("#add-btn").on("click", function (e) {
    e.preventDefault();
    addRow();
  });

  $("#delete-btn").on("click", function (e) {
    e.preventDefault();
    deleteChecked();
  });

  function addRow() {
    // Check if there's any row with an empty file input
    const $emptyRows = $("#image-container .image-row").filter(function () {
      return $(this).find("input[type='file']").val() === "";
    });

    if ($emptyRows.length > 0) {
      alert(
        "Please select a file for all existing rows before adding a new row."
      );
      return;
    }

    const $container = $("#image-container");
    const $newRow = $("<div>").addClass("image-row");

    const $file = $("<input>").attr("type", "file");
    const $img = $("<img>")
      .attr("src", "https://via.placeholder.com/100")
      .attr("alt", "Image Preview");

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
      .html('<i class="fa-solid fa-trash"></i>');
    $remove.on("click", function (e) {
      e.preventDefault();
      removeRow($(this));
    });

    $file.on("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $img.attr("src", e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        $img.attr("src", "https://via.placeholder.com/100");
      }
    });

    $newRow.append(
      $("<input>").attr("type", "checkbox").addClass("row-checkbox"),
      $file,
      $img,
      $select,
      $remove
    );
    $container.append($newRow);

    updatePrimary();
  }

  function removeRow($link) {
    const $row = $link.closest(".image-row");
    const $select = $row.find("select");
    if ($select.val() === "primary") {
      alert("You cannot remove the primary image.");
      return;
    }
    $row.remove();
    updatePrimary();
  }

  function updatePrimary() {
    const $rows = $("#image-container .image-row");
    let primarySelected = false;

    // Check if there's a primary image
    $rows.each(function () {
      const $select = $(this).find("select");
      if ($select.val() === "primary") {
        primarySelected = true;
      }
    });

    // Set the first row as primary if none are selected
    if (!primarySelected && $rows.length > 0) {
      $rows.first().find("select").val("primary");
      primarySelected = true;
    }

    // Update the primary selection on change
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
          if (
            !$rows.find("select").filter(function () {
              return $(this).val() === "primary";
            }).length
          ) {
            $rows.first().find("select").val("primary");
          }
        }
      });
    });
  }

  function deleteChecked() {
    const $checkedRows = $("#image-container .image-row .row-checkbox:checked");

    if ($checkedRows.length === 0) {
      alert("Please select at least one checkbox to delete.");
      return;
    }

    $checkedRows.each(function () {
      removeRow($(this).closest(".image-row"));
    });
  }
  function initialize() {
    $("#image-container .image-row input[type='file']").each(function () {
      $(this)
        .off("change")
        .on("change", function () {
          const $img = $(this).next("img");
          const file = this.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              $img.attr("src", e.target.result).show();
            };
            reader.readAsDataURL(file);
          } else {
            $img.attr("src", "https://via.placeholder.com/100").hide();
          }
        });
    });
  }
});
