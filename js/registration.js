import { burgerScroll, windowResize } from './commponents/function.js'
import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js'
import { passValid, mailValid } from './commponents/validate.js'

burger();
footerMenu();
burgerMenu();
catalogLink();
windowResize();
burgerScroll();

let
  showPassBtn = document.querySelectorAll(".show-pass"),
  passField = document.querySelector(".passfield"),
  passConfirmation = document.querySelector(".passConf"),
  mailfield = document.querySelector(".mailfield");

mailfield.addEventListener('focusout', () => {
  mailValid();
});

passField.addEventListener('focusout', () => {
  passValid();
});

passConfirmation.addEventListener('focusout', () => {
  comparisonPassword();
});

showPassBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('show-pass_active')
    let input = this.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text'
    } else {
      input.type = 'password'
    }
  })
});

function comparisonPassword() {
  let
    passField = document.querySelector(".passfield"),
    passConfirmation = document.querySelector(".passConf"),
    wrapper = passConfirmation.parentNode.parentNode;
  if (passField.value !== passConfirmation.value) {
    wrapper.classList.add('required_active')
  } else {
    wrapper.classList.remove('required_active')
  }
}
