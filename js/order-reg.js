let orderForm = document.querySelector(".order-form");
let orderFormBtn = orderForm.querySelector(".order-form__btn");
let reqFields = orderForm.querySelectorAll(".required");
let chekForm = (elem) => {
  let elWrapper = elem.parentNode;
  let fieldWrapper = elWrapper.parentNode;
  elem.value.length < 4 ? (fieldWrapper.classList.add("required_active"), console.log("focusout1")) : (fieldWrapper.classList.remove("required_active"), console.log("focusout2"));
};
let btnDis = () => { for (let i = 0; i < reqFields.length; i++) { reqFields[i].value.length < 4 ? orderFormBtn.disabled = true : orderFormBtn.disabled = false; } };
orderForm.addEventListener('submit', (event) => { event.preventDefault(); for (let i = 0; i < reqFields.length; i++) { let elem = reqFields[i]; chekForm(elem); }; });
reqFields.forEach(el => { el.addEventListener('focusout', () => { chekForm(el); }) });

