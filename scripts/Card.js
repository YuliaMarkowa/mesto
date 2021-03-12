export { Card };

class Card {
  constructor(data, cardSelector, viewCardImage) {
    this._name = data.name;
    this._link = data.link;
    this.cardSelector = cardSelector;
    this._viewCardImage = viewCardImage;
    this._cardTemplate = document.querySelector(".card-template").content;
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.querySelector(".card").cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");
    this._figcaption = this._element.querySelector(".card__text");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._figcaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        this._likeCard(evt);
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (evt) => {
        this._deleteCard(evt);
      });

    this._cardImage.addEventListener("click", () => {
      this._viewCardImage(this._link, this._figcaption);
    });
  }

  _likeCard(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _deleteCard(evt) {
    evt.target.closest(".card").remove();
  }
}