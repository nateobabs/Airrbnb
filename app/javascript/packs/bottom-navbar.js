$(document).scroll(function() {
  if(window.innerHeight + window.scrollY > document.body.clientHeight - 25) {
    $('#bottom-navbar').fadeOut('fast');
  } else{
    $('#bottom-navbar').fadeIn('fast');
  }
});