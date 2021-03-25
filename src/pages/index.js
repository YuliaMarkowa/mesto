import {
  initialCards,
  settingObject,
  formElementEdit,
  formElementNewCard,
  editProfileButton,
  addButton,
  nameInput,
  aboutInput,
  cardsContainer,
  popupProfile,
  popupNewCard,
  popupPhoto,
  profileName,
  profileCaption
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

//попап-фотография
const popupWithPhoto = new PopupWithImage(popupPhoto);
popupWithPhoto.setEventListeners();

//функция создания карточки
const createCard = (item) => {
  const card = new Card(item, ".card-template", (item) => {
    popupWithPhoto.open(item.link, item.name);
  });
  return card.generateCard();
};

//попап с данными пользователя
const userInfo = new UserInfo(profileName, profileCaption);

const profilePopup = new PopupWithForm(popupProfile, handleProfileFormSubmit);
profilePopup.setEventListeners();

const handleProfileFormSubmit = ({ name, caption }) => {
  userInfo.setUserInfo({ name, caption });
  profilePopup.close();
};

//попап добавления новой карточки
const newCardPopup = new PopupWithForm(popupNewCard, handleAddCard);
newCardPopup.setEventListeners();

const handleAddCard = ({ name, link }) => {
  const cardElement = createCard({ name, link });
  cardList.addItem(cardElement);
  newCardPopup.close();
};

//карточки из коробки
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardList.renderItems();

const addCardValidator = new FormValidator(settingObject, formElementNewCard);
addCardValidator.enableValidation();

const profileValidator = new FormValidator(settingObject, formElementEdit);
profileValidator.enableValidation();

editProfileButton.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().name;
  aboutInput.value = userInfo.getUserInfo().caption;
  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardValidator.resetValidation();
  newCardPopup.open();
});
//const handleAddCard = (evt) => {
 // evt.preventDefault();

 // const cardData = {
   // name: caption.value,
   // link: link.value,
 // };

 // cardsContainer.prepend(createCard(cardData));
 // closePopup(popupNewCard);
 // formElementNewCard.reset();
//};

//function openCardPopup(evt) {
 // evt.preventDefault();
 // formElementNewCard.reset();
 // addCardValidator.resetValidation();
 // openPopup(popupNewCard);
//}

//function openProfilePopup() {
  //nameInput.value = profileName.textContent;
 // aboutInput.value = profileCaption.textContent;
 // profileValidator.resetValidation();
 // openPopup(popupProfile);
//}

//function handleProfileFormSubmit(evt) {
 // evt.preventDefault();
 // profileName.textContent = nameInput.value;
 // profileCaption.textContent = aboutInput.value;
 // closePopup(popupProfile);
//}