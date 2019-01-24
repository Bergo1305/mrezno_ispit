
$('#btn-sign-in').click(function (e) {
  e.preventDefault();

  var username = $('#inputUsername').val();
  var password = $('#inputPassword').val();

  var data = {
    username: username,
    password: password,
  };


  $.ajax({
    url: '/login',
    type: 'POST',
    data: data,
    success: function(result) {
      console.log("res", result);
      document.location = '/private';
    }
  });

});
