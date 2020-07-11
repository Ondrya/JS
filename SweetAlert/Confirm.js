swal({
  title: "TITLE",
  icon: 'warning', //warning, error, success, info
  closeOnClickOutside: false, // запрет закрытия при клике вне окна Chrome
  allowOutsideClick: false ,  // запрет закрытия при клике вне окна Firefox
  buttons: ["Cancel", "Ok"]
}).then(function(value) {
  if (value) {
    // action if Ok
  }
});
