import Popup from "./Popup.js";
import "../pages/index.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }
  open(data) {
    this._modalPicture = this._popupElement.querySelector("#image__modal");
    this._modalPictureDescription =
      this._popupElement.querySelector(".modal__image-name");
    this._modalPicture.src = data.link;
    this._modalPicture.alt = `Photo of ${data.name}`;
    this._modalPictureDescription.textContent = data.name;
    super.open();
  }
}
