$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $('#navbar').addClass('navShadow');
  } else {
    $('#navbar').removeClass('navShadow');
  }
});