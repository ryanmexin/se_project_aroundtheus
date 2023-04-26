import{openPopUp} from "../utils/utils.js";

import {
    previewImageModal,
    previewImage,
    previewImageName,
} from "../pages/index.js";

export default class Card {
    constructor({name, link}, cardSelector) {
        this._name = name;
        this._link = link;
        this.cardSelector = cardSelector;
    }

_setEventListeners() {
    this._cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", () => {
        this._handlelikeIcon();
    });
    this._cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
        this._handleDeleteButton();
    });
    this._cardElement
    .querySelector(".card__image")
    .addEventListener("click", () => {
        this._handleCardClick();
    });
}

_handlelikeIcon() {
    this._cardElement
        .querySelector("card__like-button")
        .classList.toggle("card__like-button_active");
}
_handleDeleteButton() {
    this.cardElement.remove();
    this.cardElement = null;
}

_handleCardClick() {
    previewImage.src = this.link;
    previewImage.alt = `Photo of ${this._name}`;
    previewImageName.textContent = this.name;
    openPopUp(previewImageModal);
}

_getTemplate() {
      return document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
    }

getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this.cardElement;
    }
}



