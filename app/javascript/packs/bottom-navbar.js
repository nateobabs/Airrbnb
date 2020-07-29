$(window).scroll(function() {
  if(window.innerHeight + window.scrollY > document.body.clientHeight) {
    document.getElementById('bottom-navbar').style.display='none';
  } else{
    document.getElementById('bottom-navbar').style.display='block';
  }
});