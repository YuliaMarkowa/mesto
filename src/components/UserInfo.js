export default class UserInfo {
  constructor(nameSelector, captionSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._captionElement = document.querySelector(captionSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      caption: this._captionElement.textContent,
    };
  }

  setUserInfo({ name, caption }) {
    this._nameElement.textContent = name;
    this._captionElement.textContent = caption;
  }
}