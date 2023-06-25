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
  avatarSelector,
  cardDeleteModal,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  authToken: "cb447498-fb2c-4c99-9fc5-8ee58bc7fe4c",
});

// Popup with Image
const cardPreview = new PopupWithImage({
  popupSelector: "#preview-image-modal",
});
cardPreview.setEventListeners();

// Section / Card Create Card
const renderCard = (data) => {
  const likes = data.likes || [];
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imageData) => {
        cardPreview.open(imageData);
      },
      handleDeleteClick: () => {
        deleteModal.open();
        deleteModal.setSubmitAction(() => {
        deleteModal.renderLoading(true);
        const id = cardElement.getId();
        api
          .deleteCard(id)
          .then(() => {
          cardElement.handleDeleteButton();
          deleteModal.close();
        })
        .catch(console.error)
        .finally(() => {
          deleteModal.renderLoading(false);
        });
      });
      },

      handleLikeClick: () => {
        const id = cardElement.getId();
        console.log();
        if (cardElement.isLiked()) {
          api
            .unLikeCard(id)
            .then((data) => {
              cardElement.setLikes(data.likes);
            })
            .catch((err) => console.error(err));
        } else {
          api
            .likeCard(id)
            .then((data) => {
              cardElement.setLikes(data.likes);
            })
            .catch((err) => console.error(err));
        }
      },
      myId: userId,
    },
    selectors.cardTemplate
  );

  const newCard = cardElement.getView();
  cardSection.addItem(newCard);
};

const deleteModal = new PopupWithForm({
  handleFormSubmit: () => {
    deleteModal.renderLoading(true);
  },
  popupSelector: cardDeleteModal,
  loadingText: "Deleting...",
});

// User Info
const user = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile__image"
);

//pulling in the card data via API
let cardSection;
let userId;

Promise.all([api.getUserInfo(), api.getCardList()])
  .then(([userData, data]) => {
    user.setUserInfo({
      title: userData.name,
      subtitle: userData.about,
    });
    user.setAvatarInfo(userData.avatar);
    userId = userData._id;
    cardSection = new Section(
      {
        items: data,
        renderer: renderCard,
      },
      selectors.cardSection
    );

    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

// Popup with form New Card Creation
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: (inputValues) => {
    newCardPopup.renderLoading(true);
    api
      .addCard(inputValues)
      .then((inputValues) => {
        renderCard(inputValues);
        newCardPopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  loadingText: "Saving...",
});

newCardPopup.setEventListeners();

const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (inputValues) => {
    editProfileModal.renderLoading(true);
   // Make an API call to update the user's profile
   api
   .updateUserInfo(inputValues.title, inputValues.subtitle)
   .then((response) => {
     // Assuming the API call is successful
     user.setUserInfo(response);
     editProfileModal.close();
   })
   .catch((error) => {
     // Handle API call error
     console.error("Error updating profile:", error);
     // You can show an error message to the user or handle the error in another way
   })
   .finally(() => {
     // Hide the loading state
     editProfileModal.renderLoading(false);
   });
},
});

editProfileModal.setEventListeners();
// profile Image

editButtonAvatar.addEventListener("click", () => {
  avatarImageModal.open();
  profileImageValidator.resetValidation();
});

deleteModal.setEventListeners();

const avatarImageModal = new PopupWithForm({
  popupSelector: "#modal-profile-image",
  handleFormSubmit: (inputValues) => {
    api
      .updateUserProfile({ avatar: inputValues.link })
      .then((response) => {
        user.setUserInfo({
          title: response.name,
          subtitle: response.about,
          avatar: response.avatar,
        });
        avatarImageModal.close();
      })
      .catch(console.error)
      .finally(() => {
        avatarImageModal.renderLoading(false);
      });
  },
  loadingText: "Saving...",
});

avatarImageModal.setEventListeners();

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

const profileImageButton = document.querySelector(
  ".profile__image-edit-button"
);

const profileImageSaveButton = document.querySelector(".modal__button_save");
const profileImage = document.querySelector("#modal-profile-image");
const editForm = document.querySelector("#profile-form");
const editFormValidator = new FormValidator(config, editForm);
editFormValidator.enableValidation();
const addCardFormElement = document.querySelector("#add-card-form");
const addFormValidator = new FormValidator(config, addCardFormElement);
addFormValidator.enableValidation();
const addProfileImageElement = document.querySelector("#profile-change-image");
const profileImageValidator = new FormValidator(config, addProfileImageElement);
profileImageValidator.enableValidation();