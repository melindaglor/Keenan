const popup = document.querySelector('.full-screen');
const popup1 = document.querySelector('.full-screen1');

function showPopup(){
  popup.classList.remove('hidden');
}

function closePopup(){
  popup.classList.add('hidden');
}