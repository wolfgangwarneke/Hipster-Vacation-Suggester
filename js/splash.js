var userName;
var timedChangeText = function(text) {
  setTimeout(function() {
    if ( $('#username').val() === "" ) {
      $('label').html(text);
    }
  }, 21000);
}

$(document).ready(function() {
  $('#splash').fadeIn(6000).removeClass('hidden');
  $('#getname').fadeIn(10000).removeClass('hidden');
  timedChangeText("...or if you don't want to that's chill too");
  $('#getname form').submit(function(event) {
    var userName = $('#username').val();
    $('#splash').addClass('hidden');
    $('#maincontain').removeClass('hidden');
    event.preventDefault();
  })
});
