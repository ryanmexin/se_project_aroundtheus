export default class Popup {
  constructor({ popupSelector }) {
    console.log(this._popupElement);
    this._popupElement = document.querySelector(popupSelector);
    console.log(this._popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _handleClickClose = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      this.close(evt.target);
    }
  };

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("mousedown", this._handleClickClose);
  }
  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener("mousedown", this._handleClickClose);
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  setEventListeners() {
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", () => this.close());
  }
}
