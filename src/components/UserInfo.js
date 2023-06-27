export default class UserInfo {
  constructor(title, subtitle, avatarSelector) {
    this.title = document.querySelector(title);
    this.subtitle = document.querySelector(subtitle);
    this._profileAvatarElement = document.querySelector(avatarSelector)
  }
  getUserInfo() {
    return {
      title: this.title.textContent,
      subtitle: this.subtitle.textContent,
    };
  }
  setUserInfo({ title, subtitle, avatar }) {
    this.title.textContent = title;
    this.subtitle.textContent = subtitle;
    this._profileAvatarElement.src = avatar;
    
    
  }


  setAvatarInfo(avatar) {
    this._profileAvatarElement.src = avatar;
  }

 

}
