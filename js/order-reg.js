let orderForm = document.querySelector(".order-form");
let orderFormBtn = orderForm.querySelector(".order-form__btn");
let reqFields = orderForm.querySelectorAll(".required");
let validCheck = () => {
  for (let i = 0; i < reqFields.length; i++) {
    let field = reqFields[i].value;
    let fieldWrapper = reqFields[i].parentNode;
    if (!field.length < 4) {
      fieldWrapper.parentNode.classList.add("required_active")
      orderFormBtn.disabled = true;
    }
    if (field.length >= 4) {
      fieldWrapper.parentNode.classList.remove("required_active")
      orderFormBtn.disabled = false;
    }
  }
};

orderForm.addEventListener('click', (event) => {
  event.preventDefault();
  validCheck();
});