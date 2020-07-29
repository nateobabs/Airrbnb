const email = document.querySelector('#email');
const password = document.querySelector('#password');
const requiredMsg = document.querySelector('#requiredMsg');
const invalidMsg = document.querySelector('#invalidMsg');
const requiredPassMsg = document.querySelector('#requiredPassMsg');
const smallPassMsg = document.querySelector('#smallPassMsg');
const emailPattern = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

email.addEventListener("keyup", () => {
  if(email.value === ''){
    requiredMsg.style.display = 'block';
    invalidMsg.style.display = 'none';
  } else if(!emailPattern.test(email.value)){
    invalidMsg.style.display = 'block';
    requiredMsg.style.display = 'none';
  } else{
    requiredMsg.style.display = 'none';
    invalidMsg.style.display = 'none';
  }
});

password.addEventListener("keyup", () => {
  if(password.value === ''){
    requiredPassMsg.style.display = 'block';
    smallPassMsg.style.display = 'none';
  } else if(password.value.length < 6){
    smallPassMsg.style.display = 'block';
    requiredPassMsg.style.display = 'none';
  } else{
    requiredPassMsg.style.display = 'none';
    smallPassMsg.style.display = 'none';
  }
});



