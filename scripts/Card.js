const cardTemplate = document.querySelector(".card-template").content;

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this.cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate;
    this._setEventListeners();

    this._cardImage = this._element.querySelector(".card__image");
    this._figcaption = this._element.querySelector(".card__text");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._figcaption.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });

    this._likeButton.addEventListener("click", () => {
      this._likeCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._viewCardImage();
    });
  }

  _deleteCard(evt) {
    this._deleteButton = this._element.querySelector(".card__delete-button");
    evt.target.closest.cardElement.remove();
  }

  _likeCard(evt) {
    this._likeButton = this._element.querySelector(".card__like-button");
    evt.target.classList.toggle("card__like-button_active");
  }

  _viewCardImage() {
    popupPhotoImage.src = this._link;
    popupPhotoFigcaption.textContent = this._figcaption.textContent;
    //popupPhotoImage.alt = `Изображение места: ${figcaption.textContent}`;
    openPopup(popupPhoto);
  }
}

const addCards = (data) => {
  data.forEach((item) => {
    const card = new Card(item, ".card");
    const cardElement = card.generateCard();

    cardsContainer.prepend(cardElement);
  });
};