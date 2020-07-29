const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const card = document.querySelector('.guestCard');
const numberOfGuest = document.querySelector('#numberGuest');
const showGuestBtn = document.querySelector('#showGuest');
const guests = document.querySelector('#guests');
const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');
const checkinError = document.querySelector('#checkin-error');
const checkoutError = document.querySelector('#checkout-error');
const setCheckin = document.querySelector('#setCheckin');
const setCheckout = document.querySelector('#setCheckout');
const setGuests = document.querySelector('#setGuests');
let count = 0;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

plusBtn.addEventListener('click', () => {
  count += 1;
  numberOfGuest.textContent = count;
  minusBtn.disabled = false;
  if(count === 1){
    guests.style.color = 'black';
    guests.textContent = `${count} guest`;
  } else{
    guests.style.color = 'black';
    guests.textContent = `${count} guests`;
  }
  if(count === 4){
    plusBtn.disabled = true;
  } else{
    plusBtn.disabled = false;
  }
  setGuests.value = count;
});

minusBtn.addEventListener('click', () => {
  count -= 1;
  numberOfGuest.textContent = count;
  if(count <= 0){
    count = 0;
    minusBtn.disabled = true;
    plusBtn.disabled = false;
    guests.textContent = 'Add Guest';
    guests.style.color = 'rgb(138, 138, 138)';
  } else{
    if(count === 1){
      guests.style.color = 'black';
      guests.textContent = `${count} guest`;
    } else{
      guests.style.color = 'black';
      guests.textContent = `${count} guests`;
    }
  }
  setGuests.value = count;
});

showGuestBtn.addEventListener('click', () => {
  if(card.style.display === 'none'){
    card.style.display = 'block';
    minusBtn.disabled = true;
  } else{
    card.style.display = 'none';
  }
});

checkin.addEventListener('change', () => {
  const date = new Date(checkin.value);
  if(date.getDate() < new Date().getDate() || date.getMonth() < new Date().getMonth()){
    checkin.value = '';
    checkinError.style.display = 'block';
    setTimeout(() => {
      checkinError.style.display = 'none';
    }, 3000);
  } else{
    setCheckin.value = `${date.getDate()} ${monthNames[date.getMonth() + 1]}`;
  }
});

checkout.addEventListener('change', () => {
  const checkoutDate = new Date(checkout.value);
  let checkinDate = '';
  if(checkin.value === null){
    checkinDate = new Date();
  } else{
    checkinDate = new Date(checkin.value);
  }
  if(checkoutDate < checkinDate){
    checkout.value = '';
    checkoutError.style.display = 'block';
    setTimeout(() => {
      checkoutError.style.display = 'none';
    }, 3000);
  } else{
    setCheckout.value = `${checkoutDate.getDate()} ${monthNames[checkoutDate.getMonth() + 1]}`;
  }
});
