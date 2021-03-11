import { Card } from "./Card.js";
import { initialCards } from "./initial-cards.js";
import { FormValidator } from "./FormValidator.js";

const popupProfile = document.querySelector(".popup_type_profile");
const popupNewCard = document.querySelector(".popup_type_new-card");

const overlays = document.querySelectorAll(".popup");
const saveButton = document.querySelector(".popup__submit_save");
const createButton = document.querySelector(".popup__submit_create");

const editProfileButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupButtons = document.querySelectorAll(".popup__close-button");

const formElementEdit = document.querySelector(".popup__form-edit");
const formElementNewCard = document.querySelector(".popup__form-add");
const forms = document.querySelectorAll(".popup__form");

const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");

const nameInput = document.querySelector(".popup__input[name=name]");
const aboutInput = document.querySelector(".popup__input[name=about]");

const caption = document.querySelector(".popup__input[name=caption]");
const link = document.querySelector(".popup__input[name=link]");

const popupPhoto = document.querySelector(".popup_type_image");
const popupPhotoImage = document.querySelector(".popup__image");
const popupPhotoFigcaption = document.querySelector(".popup__figcaption");

const cardsContainer = document.querySelector(".cards");

const addCards = (data) => {
  data.forEach((item) => {
    const card = new Card(item, ".card", viewCardImage);
    const cardElement = card.generateCard();

    cardsContainer.prepend(cardElement);
  });
};

const handleAddCard = (evt) => {
  evt.preventDefault();

  const cardData = [
    {
      name: caption.value,
      link: link.value,
    },
  ];

  addCards(cardData);
  closePopup(popupNewCard);
  formElementNewCard.reset();
};

const closeOverlayPopup = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

const escapeHandler = (evt) => {
  const screenPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopup(screenPopup);
  }
};

const viewCardImage = (link, figcaption) => {
  popupPhotoImage.src = link;
  popupPhotoFigcaption.textContent = figcaption.textContent;
  popupPhotoImage.alt = `Изображение места: ${figcaption.textContent}`;
  openPopup(popupPhoto);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", escapeHandler);
  overlays.forEach((element) =>
    element.addEventListener("click", closeOverlayPopup)
  );
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapeHandler);
  overlays.forEach((element) =>
    element.removeEventListener("click", closeOverlayPopup)
  );
  createButton.setAttribute("disabled", true);
  createButton.classList.add("popup__submit_disabled");
  formElementNewCard.reset();
}

function openProfilePopup() {
  saveButton.setAttribute("disabled", true);
  saveButton.classList.add("popup__submit_disabled");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileCaption.textContent;
  openPopup(popupProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = aboutInput.value;
  closePopup(popupProfile);
}

const validityForms = (forms) => {
  const settingObject = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  };

  forms.forEach((element) => {
    const form = new FormValidator(settingObject, element);
    form.enableValidation();
  });
};

addButton.addEventListener("click", () => openPopup(popupNewCard));
editProfileButton.addEventListener("click", () => openProfilePopup());

closePopupButtons.forEach((button) =>
  button.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup"))
  )
);

formElementEdit.addEventListener("submit", handleProfileFormSubmit);
formElementNewCard.addEventListener("submit", handleAddCard);

addCards(initialCards);
validityForms(forms);