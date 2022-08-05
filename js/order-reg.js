let orderForm = document.querySelector(".order-form");
let orderFormBtn = orderForm.querySelector(".order-form__btn");
let reqFields = orderForm.querySelectorAll(".required");

orderForm.addEventListener('click', (event) => {
  event.preventDefault();
});
reqFields.forEach(el => {
  el.addEventListener('click', () => {
    let fieldWrapper = el.parentNode;
    if (el.value.length <= 3){
      console.log("1")
      fieldWrapper.parentNode.classList.add("required_active")
    }
    if (el.value.length >= 4){
      console.log("2")
      fieldWrapper.parentNode.classList.remove("required_active")
    }
  })
});
reqFields.forEach(el => {
  el.addEventListener('focusout', () => {
    let fieldWrapper = el.parentNode;
    if (el.value.length <= 3){
      fieldWrapper.parentNode.classList.add("required_active")
      console.log("1")
    }
    if (el.value.length >= 4){
      fieldWrapper.parentNode.classList.remove("required_active")
      console.log("2")
    }
  })
});