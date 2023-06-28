export default class Card {
  constructor(
    { data, myId, handleLikeClick, handleDeleteClick, handleImageClick },
    cardSelector
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._id = data._id;
    this._myId = myId;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
  }

  getId() {
    return this._id;
  }
  isLiked() {
    return this._likes.some((like) => like._id === this._myId);
  }

  setLikes(likes) {
    this._likes = likes;
    this.renderLikes();
  }
  renderLikes() {
    this._likesAmount = this._cardElement.querySelector(".card__like-amount");
    this._likesAmount.textContent = this._likes.length;
    if (this.isLiked()) {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.add("card__like-button_active");
    } else {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
    }
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this._data);
      });
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  handleDeleteButtonIcon() {
    if (this._ownerId !== this._myId) {
      this._cardElement.querySelector(".card__delete-button").remove();
    }
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this.renderLikes();

    this.handleDeleteButtonIcon();

    return this._cardElement;
  }
}
