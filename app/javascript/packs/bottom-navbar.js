$(document).scroll(function() {
  console.log(window.innerHeight, window.scrollY, document.body.clientHeight);
  if(window.innerHeight + window.scrollY > document.body.clientHeight - 25) {
    document.getElementById('bottom-navbar').style.display='none';
  } else{
    document.getElementById('bottom-navbar').style.display='block';
  }
});