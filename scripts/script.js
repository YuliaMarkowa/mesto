const popup = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const formElement = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');

const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const deleteButton = document.querySelector('.card__delete-button');

const cardsContainer = document.querySelector('.cards');

const initialCards = [
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

function createCard (name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  cardElement.querySelector('.card__text').textContent = name;
  cardElement.querySelector('.card__image').src = link;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  
  cardsContainer.append(cardElement);
}

function addCard() {
  for (let i=0; i<initialCards.length; i++) {
    const { name, link } = initialCards[i];
    createCard(name, link);
  }
}
addCard ();







 function openPopup() {     
     nameInput.value = profileName.textContent;
     aboutInput.value = profileCaption.textContent;
     popup.classList.add('popup_opened');
 }




 function closePopup() {
     popup.classList.remove('popup_opened');
 }




 function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = aboutInput.value;
    closePopup();
}


 addButton.addEventListener('click', openPopup);
 editProfileButton.addEventListener('click', openPopup);
 closePopupButton.addEventListener('click', closePopup);
 formElement.addEventListener('submit', formSubmitHandler);
 

