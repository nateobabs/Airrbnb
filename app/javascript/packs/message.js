if(document.querySelector('#error').style.display === 'block'){
  setTimeout(() => {
    document.querySelector('#error_explanation').style.display = 'none';
  }, 4000);
}