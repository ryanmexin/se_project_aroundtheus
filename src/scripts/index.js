import Card from "./Card.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import { initialCards, selectors } from "../utils/Constants.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

// Popup
const newImagePopup = new Popup({
  popupSelector: "#picture-modal",
});
newImagePopup.setEventListeners();

// Popup with Image
const CardPreview = new PopupWithImage({
  popupSelector: "#picture-modal",
});
CardPreview.setEventListeners();

// Section / Card
const CardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleImageClick: (imageData) => {
            CardPreview.open(imageData);
          },
        },
        selectors.cardTemplate
      );
      CardSection.addItem(cardElement.getView());
    },
  },
  selectors.cardSection
);
CardSection.renderItems();

// User Info
const user = new UserInfo(".profile__title", ".profile__description");

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: () => {},
});
newCardPopup.setEventListeners();
const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: ({ name, job }) => {
    user.setUserInfo({ name, job });
  },
});
editProfileModal.setEventListeners();

const openEditPopupButton = document.querySelector(".profile__edit-button");
openEditPopupButton.addEventListener("click", () => {
  user.getUserInfo();
  editProfileModal.open();
});
const openAddPopupButton = document.querySelector(".profile__add-button");
openAddPopupButton.addEventListener("click", () => {
  newCardPopup.open();
});
// Form Validator
const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const editForm = document.querySelector("#edit-form");
const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
const addForm = addProfileModal.querySelector("#add-form");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

// /*-------------------------------------------------*/
// /*                    Elements                     */
// /*-------------------------------------------------*/

// export const previewImageModal = document.querySelector("#preview-image-modal");
// export const previewImage = previewImageModal.querySelector(".modal__image");
// export const previewImageName =
//   previewImageModal.querySelector(".modal__image-name");

// const profileEditModal = document.querySelector("#profile-edit-modal");
// const profileEditBtn = document.querySelector("#profile-edit-button");
// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__subtitle");
// const cardListEl = document.querySelector(".cards__list");
// const profileTitleInput = document.querySelector("#profile-title-input");
// const profileDescriptionInput = document.querySelector(
//   "#profile-description-input"
// );
// const editCloseButton = profileEditModal.querySelector(".modal__close");
// const addCardModal = document.querySelector("#add-card-modal");
// const addSubmitButton = addCardModal.querySelector(".modal__button");
// const addNewCardButton = document.querySelector(".profile__buttons-add");
// const addCloseButton = addCardModal.querySelector(".modal__close");
// const addCardFormElement = document.querySelector("#add-card-form");
// const cardTitleInput = addCardFormElement.querySelector(
//   "#modal__form-type-title"
// );
// const cardUrlInput = addCardFormElement.querySelector("#modal__form-type-url");

// const previewImageCloseButton =
//   previewImageModal.querySelector(".modal__close");

// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__form-input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };

// const editForm = document.querySelector("#profile-form");

// const editFormValidator = new FormValidator(config, editForm);
// editFormValidator.enableValidation();
// const addFormValidator = new FormValidator(config, addCardFormElement);
// addFormValidator.enableValidation();

// previewImageCloseButton.addEventListener("click", () =>
//   closePopUp(previewImageModal)
// );

// //Edit Modal
// editCloseButton.addEventListener("click", () => closePopUp(profileEditModal));

// profileEditBtn.addEventListener("click", function () {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openPopUp(profileEditModal);
// });
// profileEditModal.addEventListener("submit", (event) => {
//   event.preventDefault();
//   profileDescription.textContent = profileDescriptionInput.value;
//   profileTitle.textConent = profileTitleInput.value;
//   closePopUp(profileEditModal);
//   editFormValidator.toggleButtonState();
// });

// //Add Modal
// addCloseButton.addEventListener("click", () => closePopUp(addCardModal));
// addNewCardButton.addEventListener("click", function () {
//   openPopUp(addCardModal);
// });

// addCardModal.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardData = {
//     name: cardTitleInput.value,
//     link: cardUrlInput.value,
//   };

//   renderCard(cardData, cardListEl);
//   closePopUp(addCardModal);
//   addCardFormElement.reset();
//   addFormValidator.toggleButtonState();
// });

// //Array Data
// const renderCard = (data, cardListEl) => {
//   const card = new Card(data, "#card-template");
//   cardListEl.prepend(card.getView());
// };

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardListEl);
// });
