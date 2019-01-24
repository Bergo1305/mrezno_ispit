
$('#btn-logout').click(function (e) {
  e.preventDefault();

  $.ajax({
    url: '/logout',
    type: 'POST',
    success: function() {
      document.location = '/login';
    }
  });
})
