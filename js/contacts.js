import { burgerScroll, windowResize } from './commponents/function.js'
import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js'
import { mailValid, telValid, fullNameValid } from './commponents/validate.js'

burger();
footerMenu();
burgerMenu();
catalogLink();
windowResize();
burgerScroll();

let
  fullName = document?.querySelectorAll(".fullName"),
  mailField = document?.querySelector(".mailfield"),
  textForm = document?.querySelector(".text-form textarea"),
  telField = document?.querySelector(".tel");
  let regex = /[0-9]/g;
  for (let i = 0; i < fullName.length; i++) {
    let a = fullName[i];
    a.oninput = function () { this.value = this.value.replace(regex, '') }
  };
  fullName.forEach(function (field){
    field.addEventListener('focusout', function(){
      fullNameValid();
    })
  });
  mailField?.addEventListener('focusout', () => {
    mailValid();
  });
  telField.addEventListener('focusout', () => {
    telValid();
   });
   textForm.addEventListener("focusout", function () {
    this.value.length < 2 ? this.parentNode.parentNode.classList.add('required_active') : this.parentNode.parentNode.classList.remove('required_active')
   })
