// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__form-input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };

// function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
//   inputEl.classList.add(inputErrorClass);
//   errorMessageEl.textContent = inputEl.validationMessage;
//   errorMessageEl.classList.add(errorClass);
// }

// function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
//   inputEl.classList.remove(inputErrorClass);
//   errorMessageEl.textContent = "";
//   errorMessageEl.classList.remove(errorClass);
// }

// function checkInputValidity(formEl, inputEl, options) {
//   if (!inputEl.validity.valid) {
//     showInputError(formEl, inputEl, options);
//   } else {
//     hideInputError(formEl, inputEl, options);
//   }
// }

// function setEventListeners(formEl, options) {
//   const { inputSelector } = options;
//   const inputEls = [...formEl.querySelectorAll(inputSelector)];
//   const submitButton = formEl.querySelector(".modal__button", options);
//   toggleButtonState(inputEls, submitButton, options);
//   inputEls.forEach((inputEl) => {
//     inputEl.addEventListener("input", (e) => {
//       checkInputValidity(formEl, inputEl, options);
//       toggleButtonState(inputEls, submitButton, options);
//     });
// //   });
// // }
// function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
//   let foundInvalid = false;
//   inputEls.forEach((inputEl) => {
//     if (!inputEl.validity.valid) {
//       foundInvalid = true;
//     }
//   });

//   if (foundInvalid) {
//     submitButton.classList.add(inactiveButtonClass);
//     submitButton.disabled = true;
//   } else {
//     submitButton.classList.remove(inactiveButtonClass);
//     submitButton.disabled = false;
//   }
// };
// function enableValidation(options) {
//   const formEls = [...document.querySelectorAll(options.formSelector)];
//   formEls.forEach((formEl) => {
//     formEl.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });

//     setEventListeners(formEl, options);
//   });
// }

// enableValidation(config);
// //look for all inputs inside form
// //loop through all the inputs to see if all are valid
// //if input is not valid
// // get validation message
// // add error class to input
// // display error message
// // disable button
// // if all inputs are valid
// // enable button
// // reset error message
