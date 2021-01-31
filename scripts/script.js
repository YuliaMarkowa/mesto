let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');

let buttonEditProfile = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close-button');

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

 buttonEditProfile.addEventListener('click', openPopup);
 buttonClosePopup.addEventListener('click', closePopup);
 formElement.addEventListener('submit', formSubmitHandler);
 

