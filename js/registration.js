import { burgerScroll, windowResize } from './commponents/function.js'
import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js'
import { passValid, mailValid, telValid, fullNameValid } from './commponents/validate.js'

burger();
footerMenu();
burgerMenu();
catalogLink();
windowResize();
burgerScroll();

let
  showPassBtn = document?.querySelectorAll(".show-pass"),
  passField = document?.querySelector(".passfield"),
  passConfirmation = document?.querySelector(".passConf"),
  mailField = document?.querySelector(".mailfield"),
  telField = document?.querySelector(".tel"),
  fullName = document?.querySelectorAll(".fullName"),
  saveFormBtn = document?.querySelector(".save-form");
let regex = /[0-9]/g;
for (let i = 0; i < fullName.length; i++) {
  let a = fullName[i];
  a.oninput = function () { this.value = this.value.replace(regex, '') }
};
fullName.forEach(function (field){
  field.addEventListener('focusout', function(){
    fullNameValid();
  })
})
mailField?.addEventListener('focusout', () => {
  mailValid();
});
telField.addEventListener('focusout', () => {
 telValid();
});
passField?.addEventListener('focusout', () => {
  passValid();
});

passConfirmation?.addEventListener('focusout', () => {
  comparisonPassword();
});

showPassBtn?.forEach(function (btn) {
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

saveFormBtn.addEventListener('click', (el) => {
  el.preventDefault();
  fullNameValid()
  mailValid();
  telValid()
  passValid();
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



