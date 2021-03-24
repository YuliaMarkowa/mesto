

import {
  initialCards,
  settingObject,
  formElementEdit,
  formElementNewCard,
  editProfileButton,
  addButton,
  nameInput,
  aboutInput,
  cardsContainer
} from "../utils/constants.js";


import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";


//Экземпляр попапа с фотографией
 const popupWithPhoto = new PopupWithImage(".popup_type_image");
 popupWithPhoto.setEventListeners();


//Функция создания карточки
const createCard = (item)=> {
  const card = new Card(item, ".card-template", (item) => {
    popupWithPhoto.open(item.link, item.name);
  });
  return card.generateCard();
}




//Попап с данными пользователя
const userInfo = new UserInfo("profile__name", "profile__caption");
const 

const profilePopup = new PopupWithForm(".popup_type_profile")






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

//function openCardPopup(evt) {
 // evt.preventDefault();
 // formElementNewCard.reset();
 // addCardValidator.resetValidation();
 // openPopup(popupNewCard);
//}

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
  }
  }, cardsContainer);

cardList.renderItems();

const addCardValidator = new FormValidator(settingObject, formElementNewCard);
addCardValidator.enableValidation();

const profileValidator = new FormValidator(settingObject, formElementEdit);
profileValidator.enableValidation();


//addButton.addEventListener("click", (evt) => openCardPopup(evt));
//editProfileButton.addEventListener("click", () => openProfilePopup());



formElementEdit.addEventListener("submit", handleProfileFormSubmit);
formElementNewCard.addEventListener("submit", handleAddCard);