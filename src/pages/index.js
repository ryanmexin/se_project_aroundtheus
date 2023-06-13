import Card from "../components/Card.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import {
  initialCards,
  selectors,
  profileTitleInput,
  profileDescriptionInput,
  avatarModalFormSelector,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  authToken: "cb447498-fb2c-4c99-9fc5-8ee58bc7fe4c",
});

api.getCardList().then((res) => console.log(res));
api.getUserInfo().then((res) => console.log(res));

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

api.getUserInfo().then((userData) => {
  user.setUserInfo({
    title: userData.name,
    subtitle: userData.about,
  });
});

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: (inputValues) => {
    //newCardPopup.renderLoading(true);
    api.addCard(inputValues)
    //newCardPopup.setLoading(true);
    //api.addCard(inputValues).then((inputValues) => {
     // newCardPopup.setLoading(false);
     //loadingText: "Saving...",
      renderCard(inputValues);
      newCardPopup.close();
      }
  },
);
newCardPopup.setEventListeners();

const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (inputValues) => {
    user.setUserInfo(inputValues);
    editProfileModal.close();
  },
});
editProfileModal.setEventListeners();




//test 
// const avatarPopup = new PopupWithForm("#profile-image-edit-popup", (value) => {
//   avatarPopup.renderLoading(true);
//   api
//     .updateProfileAvatar(value.avatar)
//     .then((value) => {
//       newUserInfo.setAvatar(value.avatar);
//       avatarPopup.closeModalWindow();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       avatarPopup.renderLoading(false, "Save");
//     });
// });

// const profileImageModal = new PopupWithForm({
//   popupSelector: "#modal-profile-image",
//   handleFormSubmit
// })


// const editImageButton = document.querySelector(".profile-image-button");
// editImageButton.addEventListener("click", () => {
//   addFormValidator.resetValidation();
//   avatarModalFormSelector.open();
  // if (formValidators.hasOwnProperty(avatarModalFormSelector)) {
  //   [avatarModalFormSelector].resetValidation();
  // }
// });

// pop button
const openEditPopupButton = document.querySelector("#profile-edit-button");
openEditPopupButton.addEventListener("click", () => {
  const userData = user.getUserInfo();
  profileTitleInput.value = userData.title;
  profileDescriptionInput.value = userData.subtitle;
  editFormValidator.resetValidation();
  editProfileModal.open();
});
const openAddPopupButton = document.querySelector(".profile__buttons-add");
openAddPopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
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

const profileImageButton = document.querySelector(".profile__image-edit-button");

const profileImageSaveButton = document.querySelector(".modal__button_save");
const profileImage = document.querySelector("#modal-profile-image");
const editForm = document.querySelector("#profile-form");
const editFormValidator = new FormValidator(config, editForm);
editFormValidator.enableValidation();
const addCardFormElement = document.querySelector("#add-card-form");
const addFormValidator = new FormValidator(config, addCardFormElement);
addFormValidator.enableValidation();
