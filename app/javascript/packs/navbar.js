if(document.querySelector('#navbar').style.display === ''){
  const toggle = document.querySelector('#toggle');
  const menu = document.querySelector('.navbar-menu');
  const dropdownTrigger = document.querySelector('.dropBtn');
  const dropdownMenu = document.querySelector('.dropdown');
  toggle.addEventListener('click', function(e){
    if(!menu.classList.contains('is-active')){
      menu.classList.add('is-active');
    } else{
      menu.classList.remove('is-active');
    }
  });
  dropdownTrigger.addEventListener('click', () => {
    if(!dropdownMenu.classList.contains('is-active')){
      dropdownMenu.classList.add('is-active');
    } else{
      dropdownMenu.classList.remove('is-active');
    }
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
      $('#navbar').addClass('navShadow');
    } else {
      $('#navbar').removeClass('navShadow');
    }
  });
}