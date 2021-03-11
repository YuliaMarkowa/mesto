export { FormValidator };

class FormValidator {
  constructor(settingObject, formSelector) {
    this._inputSelector = settingObject.inputSelector;
    this._submitButtonSelector = settingObject.submitButtonSelector;
    this._inactiveButtonClass = settingObject.inactiveButtonClass;
    this._inputErrorClass = settingObject.inputErrorClass;
    this._errorClass = settingObject.errorClass;

    this._element = formSelector;
  }

  _showInputError(element, inputElement, errorMessage) {
    const errorElement = element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(element, inputElement) {
    const errorElement = element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(element, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        element,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(element, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._element.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._element.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._element, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}