const desc = document.querySelector('.description');
const link = document.querySelector('#readlink');
const checkinLabel = document.querySelector('#checkin');
const checkoutLabel = document.querySelector('#checkout');
const checkinDate = document.querySelector('#checkinDate');
const checkoutDate = document.querySelector('#checkoutDate');
const startDate = document.querySelector('#start_date');
const endDate = document.querySelector('#end_date');
const price = document.querySelector('#price');
const guests = document.querySelector('#reservation_total');
const cost = document.querySelector('#cost');
const totalNight = document.querySelector('#total_nights');
const btn = document.querySelector('.searchBtn');
let newValue = desc.textContent;
let total = null, checkin, checkout;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
desc.textContent = `${desc.textContent.substring(0, 350)}...`
btn.disabled = true;

link.addEventListener('click', () => {
  link.style.display = 'none';
  desc.textContent = newValue;
}); 

checkinDate.addEventListener('change', () => {
  checkin = new Date(checkinDate.value);
  if(checkin.getDate() < new Date().getDate() || checkin.getMonth() < new Date().getMonth()){
    checkinLabel.textContent = 'Invalid Date';
    checkinLabel.style.color = 'red';
    checkinDate.value = '';
  } else{
    checkinLabel.textContent = 'CHECK-IN';
    checkinLabel.style.color = '#4a4a4a';
    startDate.value = `${checkin.getDate()} ${monthNames[checkin.getMonth() + 1].substring(0, 3)}`;
    if(checkout != null && document.querySelector('#charges').style.display === 'none' && total != null){
      calculateCharges();
      btn.disabled = false;
    } else{
      document.getElementById('charges').style.display = 'none';
    }
  }
});

checkoutDate.addEventListener('change', () => {
  let inDate;
  checkout = new Date(checkoutDate.value);
  if(checkinDate.value !== null){
    inDate = new Date(checkinDate.value);
  } else{
    inDate = new Date();
  }
  if(checkout < inDate ){
    checkoutDate.value = '';
    checkoutLabel.textContent = 'Invalid Date';
    checkoutLabel.style.color = 'red';
  } else{
    checkoutLabel.textContent = 'CHECK-OUT';
    checkoutLabel.style.color = '#4a4a4a';
    endDate.value = `${checkout.getDate()} ${monthNames[checkout.getMonth() + 1].substring(0, 3)}`;
    if(checkin != null && document.querySelector('#charges').style.display === 'none' && total != null){
      calculateCharges();
      btn.disabled = false
    } else{
      document.getElementById('charges').style.display = 'none';
    }
  }
});

guests.addEventListener('change', () => {
  total = guests.value;
  if(checkout != null && document.querySelector('#charges').style.display === 'none' && checkout != null){
    calculateCharges();
    btn.disabled = false
  } else{
    document.getElementById('charges').style.display = 'none';
  }
});

function calculateCharges(){
  document.getElementById('charges').style.display = 'block';
  const nights = document.querySelector('#nights');
  const calculatedPrice = document.querySelector('#total_cal');
  const totalPrice = document.querySelector('#total_price');
  let totalAmount;

  if(totalNights() === 0){
    nights.textContent = 1;
    totalNight.value = 1;
    totalAmount = 1 * parseInt(cost.value);
  } else{
    nights.textContent = totalNights();
    totalNight.value = totalNights();
    totalAmount = totalNights() * parseInt(cost.value);
  }
  calculatedPrice.textContent = '₹ ' + toPrice(totalAmount);
  price.value = totalAmount;
  totalPrice.textContent = '₹ ' + toPrice(totalAmount);
}

function totalNights(){
  const oneDay = 24 * 60 * 60 * 1000;
  const nights = Math.ceil(Math.abs((checkin - checkout) / oneDay));
  return nights;
}

function toPrice(price){
  x = price.toString();
  var lastThree = x.substring(x.length-3);
  var otherNumbers = x.substring(0,x.length-3);
  if(otherNumbers != '')
      lastThree = ',' + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}