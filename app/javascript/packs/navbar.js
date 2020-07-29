const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.navbar-menu');

toggle.addEventListener('click', function(e){
  if(!menu.classList.contains('is-active')){
    menu.classList.add('is-active');
  } else{
    menu.classList.remove('is-active');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
    $('#navbar').addClass('navShadow');
  } else {
    $('#navbar').removeClass('navShadow');
  }
});