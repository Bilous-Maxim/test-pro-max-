function changeLight(color) {
  document.getElementById('red').style.background = 'gray';
  document.getElementById('yellow').style.background = 'gray';
  document.getElementById('green').style.background = 'gray';

  document.getElementById(color).style.background = color;
}

const detailsBtn = document.getElementById('detailsBtn');
const description = document.getElementById('description');

detailsBtn.addEventListener('click', function () {
  description.classList.toggle('hidden');
});

const cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', function () {
  cartBtn.textContent = 'В кошику';
  cartBtn.classList.add('active');
});
