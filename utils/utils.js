export function openPopUp(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", processEscDown);
  }
  
export function closePopUp(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", processEscDown);
  }
  
export const processEscDown = (evt) => {
    if (evt.which === ESC_KEYCODE) {
      const activeModal = document.querySelector(".modal_opened");
      closePopUp(activeModal);
    }
  };

export function closeModalOnRemoteClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__close")
    ) {
      closePopUp(evt.currentTarget);
    }
  }