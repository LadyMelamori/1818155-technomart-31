const services = document.querySelector('.services-columns');
const serviceItems = services.querySelectorAll('.service-item-description');
const serviceButtons = services.querySelectorAll('.service-button');

const addServiceButtonClickHandler = function(i) {
  serviceButtons[i].addEventListener('click', function() {
    for (let j = 0; j < serviceItems.length; j++) {
      serviceItems[j].classList.remove('service-item-description-active');
    }

    serviceItems[i].classList.add('service-item-description-active');

    for (let j = 0; j < serviceButtons.length; j++) {
      serviceButtons[j].classList.remove('service-button-active');
    }

    serviceButtons[i].classList.add('service-button-active');
  });
}

for (let i = 0; i < serviceButtons.length; i++) {
  addServiceButtonClickHandler(i);
}
