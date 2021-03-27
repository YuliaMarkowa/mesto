export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._cardImage = this._element.querySelector(".card__image");
    this._figcaption = this._element.querySelector(".card__text");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(".card")
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._figcaption.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeCard();
      });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._figcaption);
    });
  }

  _likeCard() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}