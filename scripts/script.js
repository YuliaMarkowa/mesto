const popup = document.querySelector('.popup');

const popupProfile = document.querySelector('.popup_type_profile');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const formElementEdit = document.querySelector('.popup__form');
const formElementNewCard = document.querySelector('.popup__form-add');

const submitButton = document.querySelector('.popup__submit');
const createButton = document.querySelector('.popup__create-button');

const nameInput = document.querySelector('.popup__input[name=name]');
const aboutInput = document.querySelector('.popup__input[name=about]');

const caption = document.querySelector('.popup__input[name=caption]');
const link = document.querySelector('.popup__input[name=link]');

const editProfileButton = document.querySelector('.profile__edit-button');


//const closePopupButtons = document.querySelectorAll('.popup__close-button');
const closePopupButton = document.querySelector('.popup__close-button');



const addButton = document.querySelector('.profile__add-button');
//const closeButtonPopupPhoto = document.querySelector('.popup-photo__close-button');

const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoFigcaption = document.querySelector('.popup-photo__figcaption');

const cardsContainer = document.querySelector('.cards');

const cardTemplate = document.querySelector('.card-template').content;


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

  function addCards() {
    const array = initialCards
    .map(createCard)
    cardsContainer.prepend(...array)
  }
    
function createCard (item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__text').textContent = item.name;

  const figcaption = cardElement.querySelector('.card__text');
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
    
cardImage.addEventListener('click', () => {
  openPopup(popupPhoto);
  popupPhotoImage.src = item.link;
  popupPhotoFigcaption.textContent = figcaption.textContent; 
});

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function () {
  const cardElement = deleteButton.closest('.card');
  cardElement.remove();
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  
  return cardElement;
}

function handleAddCard (evt) {
  evt.preventDefault ();
  
  let captionInput = caption.value;
  let linkInput = link.value;

  const cardData = {
    name: captionInput,
    link: linkInput, 
  };

  const listItem = createCard(cardData);
  cardsContainer.prepend(listItem);
  closePopup(evt);
}




function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = aboutInput.value;
  closePopup(popupProfile);
}

//function openProfilePopup () {
//  nameInput.value = profileName.textContent;
//  aboutIput.value = profileCaption.textContent;
//  closePopup();
//};


 function openPopup(popup) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileCaption.textContent;
    popup.classList.add('popup_opened');
    openPopup();
 }

 //function closePopup(evt) {
    //const popup = evt.target.closest('.popup');
   // popup.classList.remove('popup_opened');
 //} 



addButton.addEventListener('click', () => openPopup(popupNewCard));
editProfileButton.addEventListener('click', () => openPopup (popup));
//closePopupButtons.forEach(button => button.addEventListener('click', closePopup));
closePopupButton.addEventListener('click', closePopup);




formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementNewCard.addEventListener('submit', handleAddCard);

addCards ();