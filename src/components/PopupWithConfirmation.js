import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({popupSelector, loadingText}){
        super({ popupSelector});
        this._loadingText = loadingText;
        this._popupForm = this._popupElement.querySelector(".modal__form");
        this._confirmDeleteButton = this._popupElement.querySelector(
            "#modal-delete-btn"
          );
    }
 
    
    
      open() {
        this._popupForm.addEventListener("submit", this._handleFormSubmit);
        super.open();
      }

        
setSubmitAction(action) {
    this._handleFormSubmit = action;
  }


};