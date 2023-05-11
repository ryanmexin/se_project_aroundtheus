export default class Section {
  constructor({ items, renderer }, galleryCards) {
    this._renderer = renderer;
    this._items = items;
    this._galleryCards = document.querySelector(galleryCards);
  }
  renderItems(items) {
    if (items) {
      this._renderer(items);
    } else {
      this._items.forEach((items) => {
        this._renderer(items);
      });
    }
  }

  addItem(itemElement) {
    this._galleryCards.prepend(itemElement);
  }
}
