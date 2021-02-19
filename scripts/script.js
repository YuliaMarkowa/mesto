const popupProfile = document.querySelector(".popup_type_profile");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupPhoto = document.querySelector(".popup_type_image");

const overlays = document.querySelectorAll(".popup");

const editProfileButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupButtons = document.querySelectorAll(".popup__close-button");

const formElementEdit = document.querySelector(".popup__form-edit");
const formElementNewCard = document.querySelector(".popup__form-add");

const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");

const nameInput = document.querySelector(".popup__input[name=name]");
const aboutInput = document.querySelector(".popup__input[name=about]");

const caption = document.querySelector(".popup__input[name=caption]");
const link = document.querySelector(".popup__input[name=link]");

const popupPhotoImage = document.querySelector(".popup__image");
const popupPhotoFigcaption = document.querySelector(".popup__figcaption");

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template").content;

function addCards() {
  const array = initialCards.map(createCard);
  cardsContainer.prepend(...array);
}

function createCard(item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = item.name;

  const figcaption = cardElement.querySelector(".card__text");
  const cardImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;

  cardImage.addEventListener("click", () => {
    popupPhotoImage.src = item.link;
    popupPhotoFigcaption.textContent = figcaption.textContent;
    openPopup(popupPhoto);
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });

  return cardElement;
}

function handleAddCard(evt) {
  evt.preventDefault();

  const cardData = {
    name: caption.value,
    link: link.value,
  };

  const listItem = createCard(cardData);
  cardsContainer.prepend(listItem);
  closePopup(popupNewCard);
  formElementNewCard.reset();
}

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
}

function openProfilePopup() {
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

addButton.addEventListener("click", () => openPopup(popupNewCard));
editProfileButton.addEventListener("click", () => openProfilePopup());

closePopupButtons.forEach((button) =>
  button.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup"))
  )
);

formElementEdit.addEventListener("submit", handleProfileFormSubmit);
formElementNewCard.addEventListener("submit", handleAddCard);

addCards();
