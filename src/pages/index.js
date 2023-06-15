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
  editButtonAvatar,
  changeAvatarModal,
  avatarSelector,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import { userInfo } from "os";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  authToken: "cb447498-fb2c-4c99-9fc5-8ee58bc7fe4c",
});


//pulling in the card data via API
let cardSection;

api.getCardList().then((res) => {
   cardSection = new Section(
  {
    items: res,
    renderer: renderCard,
  },
  selectors.cardSection
);

cardSection.renderItems();});


// Popup with Image
const cardPreview = new PopupWithImage({
  popupSelector: "#preview-image-modal",
});
cardPreview.setEventListeners();

//Change avatar picture



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


// User Info
const user = new UserInfo(".profile__title", ".profile__subtitle", ",profile__image");

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

// profile Image 

editButtonAvatar.addEventListener("click", () => {
  changeProfilePopup.open();
  // if (formValidators.hasOwnProperty(avatarModalFormSelector)) {
    // formValidators[avatarModalFormSelector].resetValidation();
  }
);


const avatarImageModal = new PopupWithForm({
  popupSelector: "#modal-profile-image",
  handleFormSubmit: (inputValues) => {
    api
      .updateProfileAvatar({avatar: data.url})
      .then((inputValues) => {
        userInfo.setAvatarInfo(inputValues.avatar);
        avatarImageModal.close();
      });
    }});
    
      

changeProfilePopup.setEventListeners();
// function handleProfileImageForm() {
//   //evt.preventDefault();
//   //avatarImageModal.setLoading(true);
//   const profileImage = document.querySelector(".profile__image");
//   const profileImageInput = document.querySelector("#profile-image-link");
//   profileImage.src = profileImageInput.value;
//   //profileImageModal.setLoading(false);
//   //api.updateProfileImage();
//   avatarImageModal.close();
// }

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
  //addFormValidator.resetValidation();
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
