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
const modalClose = document.querySelector("#profile-modal-close-btn");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector("cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
/*-------------------------------------------------*/
/*                 functions                       */
/*-------------------------------------------------*/


function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}


/*-------------------------------------------------*/
/*                Event Handlers                   */
/*-------------------------------------------------*/

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}
/*-------------------------------------------------*/
/* Event Listeners (to display name and subtitle in modal)*/
/*-------------------------------------------------*/
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

modalClose.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);



initialCards.forEach((cardData) =>{
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  //set the image alt text to the name field of the object
  //set the card title to the name field of the object, too
cardTitleEl.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  //return cardElement;
  cardListEl.append(cardElement);
});