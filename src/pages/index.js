<<<<<<< HEAD
=======
import "./index.css";
>>>>>>> main
import {
  initialCards,
  settingObject,
  formElementEdit,
  formElementNewCard,
  editProfileButton,
  addButton,
  nameInput,
  aboutInput,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addCardValidator = new FormValidator(settingObject, formElementNewCard);
addCardValidator.enableValidation();

const profileValidator = new FormValidator(settingObject, formElementEdit);
profileValidator.enableValidation();

//попап-фотография
const popupWithPhoto = new PopupWithImage(".popup_type_image");
popupWithPhoto.setEventListeners();

//функция создания карточки
const createCard = ({ name, link }) => {
  const card = new Card({ name, link }, ".card-template", (link, name) => {
    popupWithPhoto.open(link, name);
  });
  return card.generateCard();
};

//попап с данными пользователя
const userInfo = new UserInfo(".profile__name", ".profile__caption");
const handleProfileFormSubmit = ({ name, caption }) => {
  userInfo.setUserInfo({ name, caption });
  profilePopup.close();
};

const profilePopup = new PopupWithForm(".popup_type_profile", handleProfileFormSubmit);
profilePopup.setEventListeners();

//попап добавления новой карточки
const handleAddCard = ({ name, link }) => {
  const cardElement = createCard({ name, link });
  cardList.addItem(cardElement);
  newCardPopup.close();
};

const newCardPopup = new PopupWithForm(".popup_type_new-card", handleAddCard);
newCardPopup.setEventListeners();

//карточки из коробки
const cardList = new Section(
  {
    items: initialCards,
    renderer: ({ name, link }) => {
      const cardElement = createCard({ name, link });
      cardList.addItem(cardElement);
    },
  },
  ".cards"
);

cardList.renderItems();

editProfileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.caption;
  profileValidator.resetValidation();
  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardValidator.resetValidation();
  newCardPopup.open();
});