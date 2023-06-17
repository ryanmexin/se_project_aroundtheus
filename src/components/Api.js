export default class Api {
  constructor({ baseURL, authToken }) {
    this._baseURL = baseURL;
    this._authToken = authToken;
  }

  // GET https://around.nomoreparties.co/
  getCardList() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`).catch((err) => {
        console.error(err); // log the error to the console
      });
    });
  }

  getUserInfo() {
    return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`).catch((err) => {
        console.error(err); // log the error to the console
      });
    });
  }

  addCard({ name, link }) {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  updateUserInfo(name, about) {
    return this._request(
      "https://around.nomoreparties.co/v1/group-12/users/me",
      {
        method: "GET",
        headers: {
          authorization: this._authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          about,
        }),
      }
    );
  }

  updateUserProfile(avatar) {
    return fetch(
      "https://around.nomoreparties.co/v1/group-12/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: this._authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: avatar.avatar,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`).catch((err) => {
        console.error(err); // log the error to the console
      });
    });
  }

deleteCard(cardId){
return fetch(`https://around.nomoreparties.co/v1/group-12/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`).catch((err) => {
        console.error(err); // log the error to the console
      });
    });
  }

}

