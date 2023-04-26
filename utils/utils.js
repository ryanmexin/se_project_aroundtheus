export function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", processEscDown);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

export function openPopUp(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", processEscDown);
  modal.addEventListener("mouseDown", closeModalOnRemoteClick)
}

export function closeModalByEscape(evt) {
  if(evt.key === "Escape") {
      const openModal = document.querySelector(".modal_opened");
      closeModalByEscape(openedModal);
  }
}

export function closeModalOnRemoteClick(evt) {
  if(evt.target === evt.currentTarget) {
      closeModalByEscape(evt.target);
      }
}


