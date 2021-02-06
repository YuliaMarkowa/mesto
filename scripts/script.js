const popup = document.querySelector('.popup');
const popupNewCard = document.querySelector('#popup-new-card');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const formElement = document.querySelector('.popup__form');
const formElementNewCard = document.querySelector('.popup__form-add');

const submitButton = document.querySelector('.popup__submit');
const createButton = document.querySelector('.popup__create-button');

const nameInput = document.querySelector('.popup__input[name=name]');
const aboutInput = document.querySelector('.popup__input[name=about]');

const caption = document.querySelector('.popup__input[name=caption]');
const link = document.querySelector('.popup__input[name=link]');

const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');

const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoFigcaption = document.querySelector('.popup-photo__figcaption');

const cardsContainer = document.querySelector('.cards');

const initialCards = [
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    }
  ];

function createCard (name, link) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  cardElement.querySelector('.card__text').textContent = name;
  cardElement.querySelector('.card__image').src = link;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function () {
  const cardElement = deleteButton.closest('.card');
  cardElement.remove();
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  
  cardsContainer.prepend(cardElement);
}

function addCard() {
    for (let i=0; i<initialCards.length; i++) {
    const { name, link } = initialCards[i];
    createCard(name, link);
  }
}

addCard ();

 function openPopup(popup) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileCaption.textContent;
    popup.classList.add('popup_opened');
 }

 function closePopup(evt) {
    const popup = evt.target.closest('.popup');
    popup.classList.remove('popup_opened');
 }

 function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = aboutInput.value;
    closePopup(evt);
}  

function handleAddCard (evt) { 
    evt.preventDefault ();
    captionInput = caption.value;
    linkInput = link.value;
    createCard (caption, link);
    closePopup(evt);
} 




 
addButton.addEventListener('click', () => openPopup(popupNewCard));
editProfileButton.addEventListener('click', () => openPopup (popup));
closePopupButtons.forEach(button => button.addEventListener('click', closePopup));
formElement.addEventListener('submit', formSubmitHandler);
formElementNewCard.addEventListener('submit', handleAddCard);