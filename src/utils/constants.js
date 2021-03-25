export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  export const settingObject = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  };

export const cardsContainer = document.querySelector(".cards");  
export const formElementEdit = document.querySelector(".popup__form-edit");
export const formElementNewCard = document.querySelector(".popup__form-add");

export const editProfileButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");

export const profileName = document.querySelector(".profile__name");
export const profileCaption = document.querySelector(".profile__caption");

export const popupProfile = document.querySelector(".popup_type_profile");
export const popupNewCard = document.querySelector(".popup_type_new-card");
export const popupPhoto = document.querySelector(".popup_type_image");
export const nameInput = document.querySelector(".popup__input[name=name]");
export const aboutInput = document.querySelector(".popup__input[name=about]");

//export const overlays = document.querySelectorAll(".popup");
//export const caption = document.querySelector(".popup__input[name=caption]");
//export const link = document.querySelector(".popup__input[name=link]");