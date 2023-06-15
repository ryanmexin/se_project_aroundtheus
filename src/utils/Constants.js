export const initialCards = [
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

export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const editButtonAvatar = document.querySelector(".profile__image-edit-button")
export const editImageButton = document.querySelector(".profile-image-button");
//export const changeProfileModal = document.querySelector(modalChangeProfileSelector);
export const avatarModalFormSelector = "#profile-change-image";
export const changeAvatarModal = "modal-profile-image";
export const avatarSelector = "profile__image";

export const selectors = {
  cardSection: ".cards__list",
  cardTemplate: "#card-template",
  previewPopup: "#preview-image-modal",
};

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
