import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openPopUp, closePopUp } from "../utils/utils.js";

const initialCards = [
    {
      name: "Tokyo",
      link: "https://images.unsplash.com/photo-1678951310861-60299f9b0162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Golden Gate Bridge",
      link: "https://images.unsplash.com/photo-1603389865219-669a0768193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Pleasure Pier TX",
      link: "https://images.unsplash.com/photo-1598805291186-612c3ca482a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxlYXN1cmUlMjBwaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Oceanside CA",
      link: "https://images.unsplash.com/photo-1528521712081-0480efff6665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Yellowstone National Park",
      link: "https://images.unsplash.com/photo-1586968332704-0160550f3ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHllbGxvd3N0b25lJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Venice",
      link: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    },
  ];

  /*-------------------------------------------------*/
/*                    Elements                     */
/*-------------------------------------------------*/

export const previewImageModal = document.querySelector("#preview-image-modal");
export const previewImage = previewImageModal.querySelector(".modal__image");
export const previewImageName = previewImageModal.querySelector(".modal__image-name");

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const cardListEl = document.querySelector(".cards__list");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input" );
const editCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModal = document.querySelector("#add-card-modal");
const addSubmitButton = addCardModal.querySelector(".modal__button")
const addNewCardButton = document.querySelector(".profile__buttons-add");
const addCloseButton = addCardModal.querySelector(".modal__close")
const addCardFormElement = document.querySelector("#add-card-form");
const cardTitleInput = addCardFormElement.querySelector("#modal__form-type-title");
const cardUrlInput = addCardFormElement.querySelector("#modal__form-type-url");

const previewImageCloseButton = previewImageModal.querySelector(".modal__close");

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
const addFormValidator = new FormValidator(config, editForm);
addFormValidator.enableValidation();

previewImageCloseButton.addEventListener("click", () => closeModal(pictureModal));

//Edit Modal
editCloseButton.addEventListener("click", () =>
closeModal(profileEditModal)
);

profileEditBtn.addEventListener("click", function () {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openPopUp(profileEditModal);
       
});
profileEditModal.addEventListener("submit", (event) =>{
    event.preventDefault();
    profileDescription.textContent = profileDescriptionInput.value
    profileTitle.textConent = profileTitleInput.value;
    closePopUp(profileEditModal);
    editFormValidator.toggleButtonState();
});

//Add Modal
addCloseButton.addEventListener("click", () => closeModal(addCardModal));
addNewCardButton.addEventListener("click", function () {
    openPopUp(addCardModal);
});

addCardModal.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardData = {
        name: cardTitleInput.value,
        link: cardUrlInput.value,
    };

renderCard(cardData,cardListEl)
closePopUp(addCardModal);
addCardFormElement.reset();
addFormValidator.toggleButtonState();
});

//Array Data
const renderCard = (data, cardListEl) => {
    const card = new Card(data, "#card-template");
    cardListEl.prepend(card.getView());
};

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);  
});



