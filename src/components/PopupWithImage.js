import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    this._popupPhotoImage = document.querySelector(".popup__image");
    this._popupPhotoFigcaption = document.querySelector(".popup__figcaption");
    }

    open(link, figcaption) {
        this._popupPhotoImage.src = link;
        this._popupPhotoFigcaption.textContent = figcaption.textContent;
        this._popupPhotoImage.alt = `Изображение места: ${figcaption.textContent}`;
        super.open();
    }
}