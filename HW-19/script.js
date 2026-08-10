const lights = document.querySelectorAll('.light');
const button = document.getElementById('switchBtn');



function updateLights() {

    light.style.backgroundColor = 'gray';
  

  if (currentLight === 0) {
    lights[0].style.backgroundColor = 'red';
  } else if (currentLight === 1) {
    lights[1].style.backgroundColor = 'yellow';
  } else {
    lights[2].style.backgroundColor = 'green';
  }
}

button.onclick = function () {
  currentLight++;

  if (currentLight > 2) {
    currentLight = 0;
  }

  updateLights();
};

updateLights();
