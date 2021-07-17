const feedbackButton = document.querySelector('.feedback-button');
const feedbackPopup = document.querySelector('.feedback-popup');
const feedbackCloseButton = feedbackPopup.querySelector('.button-close');

const feedbackForm = feedbackPopup.querySelector('form');
const feedbackName = feedbackPopup.querySelector('.contact-name');
const feedbackEmail = feedbackPopup.querySelector('.contact-email');
const feedbackText = feedbackPopup.querySelector('.contact-text');
const feedbackSendButton = feedbackPopup.querySelector('.submit-feedback-button');

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');

  if (storageName) {
    feedbackName.value = storageName;
  }

  if (storageEmail) {
    feedbackEmail.value = storageEmail;
  }

  if (storageName) {
    if (storageEmail) {
      feedbackText.focus();
    } else {
      feedbackEmail.focus();
    }
  } else {
    feedbackName.focus();
  }
});

feedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove('modal-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove('modal-error');
    }
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});
