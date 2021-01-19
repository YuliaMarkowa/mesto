let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileCapture = document.querySelector('.profile__caption');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');

let buttonEditProfile = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close-button');

 function popupOpen() {
     popup.classList.add('popup_opened');
     nameInput.value = profileName.textContent;
     aboutInput.value = profileCapture.textContent;
 }

 function popupClose() {
     popup.classList.remove('popup_opened');
 }

 function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCapture.textContent = aboutInput.value;
    popupClose();
}

 buttonEditProfile.addEventListener('click', popupOpen);
 buttonClosePopup.addEventListener('click', popupClose);
 formElement.addEventListener('submit', formSubmitHandler);
 

