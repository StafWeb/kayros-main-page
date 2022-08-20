import { mailValid, passValid } from './commponents/validate.js';
let
  orderFormBtn = document.querySelector(".order-form__btn"),
  mailField = document.querySelector(".mailfield"),
  passField = document.querySelector(".passfield");

passField.addEventListener('focusout', () => {
  passValid();
});
mailField.addEventListener('focusout', () => {
  mailValid();
});
orderFormBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  mailValid();
  passValid();
  if (mailValid() == 'true' && passValid() == 'true') {
    console.log("valid")
  } else {
    console.log("invalid")
  }
});