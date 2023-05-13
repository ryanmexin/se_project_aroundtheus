export default class UserInfo {
  constructor(title, subtitle) {
    this.title = document.querySelector(title);
    this.subtitle = document.querySelector(subtitle);
  }
  getUserInfo() {
    return {
      title: this.title.textContent,
      subtitle: this.subtitle.textContent,
    };
  }
  setUserInfo({ title, subtitle }) {
    this.title.textContent = title;
    this.subtitle.textContent = subtitle;
  }
}
