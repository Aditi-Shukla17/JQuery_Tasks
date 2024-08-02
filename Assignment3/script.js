$(document).ready(function () {
  $('#user').change(function () {
    if ($(this).val() === 'mnush') {
      $('#par').removeClass('hidden');
    } else {
      $('#par').addClass('hidden');
    }
  });

  $('.parent').change(function () {
    let parentClass = $(this).attr('id');
    $('.' + parentClass).prop('checked', $(this).prop('checked'));
 //   console.log(this)
  });

  $('.child').change(function () {
    let parentClass = $(this).attr('class').split(' ')[1];
 //   console.log($(this).attr('class').split(' ')[1])
    let allChecked = $('.' + parentClass).length === $('.' + parentClass + ':checked').length;
    let anyChecked = $('.' + parentClass + ':checked').length > 0;
    $('#' + parentClass).prop('checked', allChecked || anyChecked);
  });
});
