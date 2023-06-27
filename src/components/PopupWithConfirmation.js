import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({popupSelector, handleFormSubmit, loadingText}){
        super({ popupSelector});
        this._loadingText = loadingText;
        this._handleFormSubmit = handleFormSubmit;
        this._confirmDeleteButton = this._popupElement.querySelector(
            "#modal-delete-btn"
          );
    }
 
    
setConfirmHandler(handler) {
    console.log(handler)
        this._confirmHandler = handler;
        this._confirmButton.addEventListener("click", (event) => {
          event.preventDefault();
          this._confirmHandler();
        });
        this._confirmDeleteButton.addEventListener("click", (event) => {
          event.preventDefault();
          this._confirmHandler();
        });
      }
    
        
setSubmitAction(action) {
    this._handleFormSubmit = action;
  }


};