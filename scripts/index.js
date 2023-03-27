const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*-------------------------------------------------*/
/*                    Elements                     */
/*-------------------------------------------------*/

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalClose = document.querySelector("#profile-modal-close-btn");
const addCardModalClose = document.querySelector("#add-card-modal-close-btn");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
//const profileCardTitleInput = document.querySelector("#profile-card-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__buttons-add");
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = document.querySelector("#add-card-form");
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__form-type-title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__form-type-url");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image");
const previewImageName = previewImageModal.querySelector(".modal__image-name");
const previewImageCloseButton =
  previewImageModal.querySelector(".modal__close");

/*-------------------------------------------------*/
/*                 functions                       */
/*-------------------------------------------------*/

function closePopUp(modal) {
  modal.classList.remove("modal_opened");
}

//function closeAddModal() {
// addCardModal.classList.remove("modal_opened");
//}

function openPopUp(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardImageEl.addEventListener("click", () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewImageName.textContent = cardData.name;
    openPopUp(previewImageModal);
  });

  // like button logic
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-buttton_active");
  });
  // delete button logic
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

/*-------------------------------------------------*/
/*                Event Handlers                   */
/*-------------------------------------------------*/

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });

  renderCard({ name, link }, cardListEl);
  closePopUp(addCardModal);
  addCardFormElement.reset();
}

/*-------------------------------------------------*/
/* Event Listeners (to display name and subtitle in modal)*/
/*-------------------------------------------------*/
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

profileModalClose.addEventListener("click", () => closePopUp(profileEditModal));
// Form Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
// add new card
addNewCardButton.addEventListener("click", () => {
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(addCardModal);
});
addCardModalClose.addEventListener("click", () => closePopUp(addCardModal));

/*-------------------------------------------------*/
/*        for each looping thought card array      */
/*-------------------------------------------------*/
initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

previewImageCloseButton.addEventListener("click", () => {
  closePopUp(previewImageModal);
});
