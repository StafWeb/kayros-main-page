let orderForm = document.querySelector(".order-form");
let orderFormBtn = orderForm.querySelector(".order-form__btn");
let reqFields = orderForm.querySelectorAll(".required");
let fullName = document.querySelectorAll(".fullName");
let regex = /[0-9]/g;
for (let i = 0; i < fullName.length; i++) {
  let a = fullName[i];
  a.oninput = function () { this.value = this.value.replace(regex, '') }
};
let chekForm = (elem) => {
  let elWrapper = elem.parentNode;
  let fieldWrapper = elWrapper.parentNode;
  elem.value.length < 4 ? (fieldWrapper.classList.add("required_active"), console.log("focusout1")) : (fieldWrapper.classList.remove("required_active"), console.log("focusout2"));
};
let btnDis = () => { for (let i = 0; i < reqFields.length; i++) { reqFields[i].value.length < 4 ? orderFormBtn.href = '#' : orderFormBtn.href = './order-reg-3.html'; } };
orderFormBtn.addEventListener('click', () => { for (let i = 0; i < reqFields.length; i++) { let elem = reqFields[i]; chekForm(elem); }; btnDis(); });
reqFields.forEach(el => { el.addEventListener('focusout', () => { chekForm(el); btnDis(); }) });