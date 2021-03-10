class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate() {
        const cardElement = this._cardTemplate.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate;

        this._cardImage = this._element.querySelector(".card__image");
        this._figcaption = this._element.querySelector(".card__text");
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._figcaption.textContent = this._name;

        return this._element;
    }

}