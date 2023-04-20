// const cardTemplateInput =
//   document.querySelector("#card-template").content.firstElementChild;
// const cardElement = cardTemplateInput.cloneNode(true);
// const addCardModal = document.querySelector("#add-card-modal");

import{
  openPopUp,

} from "../utils/utils.js";


 export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this.cardSelector = cardSelector;
  }

  _setEventListeners() {
    //.card__like-button
    this.cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //card__delete-button
    this.cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this.handleDeleteCard();
      });
      //card__click
    this.cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.handleCardClick;
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector("card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleCardClick() { 
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewImageName.textContent = this._name;
    openPopUp(previewImageModal);}

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
 
    this._cardElement.querySelector(".card-image").src = this._link;
    this._cardElement.querySelector("#card-title").textContent = this._name;
    this._cardElement.querySelector(".card-image").alt = this._name;
    this._setEventListeners();
  }








  //   getCard() {
  //     this._cardElement = this.getView();
  //     this._setEventListeners();
  //     //get the card view
  //     this._cardElement.querySelector(".card-image").src = this._link;
  //     this._cardElement.querySelector("#card-title").textContent = this._name;
  //     this._cardElement.querySelector(".card-image").alt = this._name;
  //     //set event listeners

  //     //return the card
  //     return this.cardElement;
}

//  // getView() {
//  //   this.cardElement = document
//   //    .querySelector(this._cardSelector)
//   //    .content.querySelector(".card")
//   //    .cloneNode(true);
//   //  this._setEventListeners();
//   //}
// }

