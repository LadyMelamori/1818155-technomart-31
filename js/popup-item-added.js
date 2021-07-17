const catalogBuyButton = document.querySelectorAll('.catalog-buy-button');
const catalogBuySuccessPopup = document.querySelector('.product-added-popup');
const catalogPopupCloseButton = catalogBuySuccessPopup.querySelector('.button-close');

for (let i = 0; i < catalogBuyButton.length; i++) {
  catalogBuyButton[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    catalogBuySuccessPopup.classList.add('modal-show');
  });
}

catalogPopupCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalogBuySuccessPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (catalogBuySuccessPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      catalogBuySuccessPopup.classList.remove("modal-show");
    }
  }
});
