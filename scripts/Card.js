export default class Card {
    constructor ({name, link}, cardSelector){
    this._name = name;
    this._link = link;
    this.cardSelector = cardSelector;
    }
  
_setEventListeners() {
  //.card__like-button
this.cardElement.querySelector(".card__like-button").addEventListener("click", () => {
  this._handleLikeIcon();
});
    
  //card__delete-button
  this.cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
  this.handleDeleteCard();
  })
 
}

handleDeleteCard() {
    this._cardElement.remove();
}



_handleLikeIcon() {
    this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
}


  getView() {
    this.cardElement = document.querySelector(this.cardSelector).content.querySelector(".card").cloneNode(true);
   //get the card view
   //set event listeners
   this._setEventListeners()
   //return the card
  }
}