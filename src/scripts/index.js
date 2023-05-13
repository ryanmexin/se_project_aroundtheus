import Card from "./Card.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import { initialCards, selectors } from "../utils/Constants.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";





// Popup with Image
 const cardPreview = new PopupWithImage({
  popupSelector: "#preview-image-modal",
 });
cardPreview.setEventListeners();

// Section / Card

      const renderCard = (data) => {
        const cardElement = new Card(
          {
            data,
            handleImageClick: (imageData) => {
              cardPreview.open(imageData);
            },
          },
          selectors.cardTemplate
        );
        const newCard = cardElement.getView();
        cardSection.addItem(newCard);
      };

      const cardSection = new Section(
        {
          items: initialCards,
          renderer: renderCard,
        },
        selectors.cardSection
      );
      cardSection.renderItems();

// User Info
const user = new UserInfo(".profile__title", ".profile__subtitle");

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: (inputValues) => {
    renderCard(inputValues);
    newCardPopup.close();
  },
});
newCardPopup.setEventListeners();
newCardPopup.close();


const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (inputValues) => {
    user.setUserInfo(inputValues);
    editProfileModal.close();
  },
});
editProfileModal.setEventListeners();
editProfileModal.close();

// pop button
const openEditPopupButton = document.querySelector("#profile-edit-button");
openEditPopupButton.addEventListener("click", () => {
  user.getUserInfo();
  editFormValidator. resetValidation();
  editProfileModal.open();

});
const openAddPopupButton = document.querySelector(".profile__buttons-add");
openAddPopupButton.addEventListener("click", () => {
  newCardPopup.open();
});
// Form Validator

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  
  const editForm = document.querySelector("#profile-form");
  const editFormValidator = new FormValidator(config, editForm);
  editFormValidator.enableValidation();
  const addCardFormElement = document.querySelector("#add-card-form");
  const addFormValidator = new FormValidator(config, addCardFormElement);
  addFormValidator.enableValidation();

