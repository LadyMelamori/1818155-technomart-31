const mapButton = document.querySelector('.clickable-map');
const mapPopup = document.querySelector('.map-popup');
const mapPopupCloseButton = mapPopup.querySelector('.button-close');

mapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapPopupCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
