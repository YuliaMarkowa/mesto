import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__submit-ux");
    this._submitInitialCaption = "";
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;      
    });    
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading, loadMessage = "Сохранение...") {
    if (isLoading) {
      this._submitInitialCaption = this._submitButton.textContent;
      this._submitButton.textContent = loadMessage;
    } else {
      this._submitButton.textContent = this._submitInitialCaption;
    }
  }

}