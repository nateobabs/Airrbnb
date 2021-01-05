$(document).scroll(function() {
  if(window.innerHeight + window.scrollY > document.body.clientHeight - 25) {
    document.getElementById('bottom-navbar').style.display='none';
  } else{
    document.getElementById('bottom-navbar').style.display='block';
  }
});