import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__form-input");
    this._handleFormSubmit = handleFormSubmit;

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _getInputValues() {
    const formvalues = {};
    this._inputList.forEach((input) => {
      formvalues[input.name] = input.value;
    });
    return formvalues;
  }

  _handleSubmit() {
    this._handleFormSubmit(this._getInputValues());
  }

  open() {
    this._popupForm.addEventListener("submit", this._handleSubmit);
    super.open();
  }
  close() {
    this._popupForm.removeEventListener("submit", this._handleSubmit);
    this._popupForm.reset();
    super.close();
  }
}
