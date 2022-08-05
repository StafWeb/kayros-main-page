let orderForm = document.querySelector(".order-form");
let orderFormBtn = orderForm.querySelector(".order-form__btn");
let reqFields = orderForm.querySelectorAll(".required"); 

orderForm.addEventListener('click', (event) => {
  event.preventDefault();
});
reqFields.forEach(el => {
  el.addEventListener('click', () => {
    let elWrapper = el.parentNode;
    let fieldWrapper = elWrapper.parentNode;
    el.value.length < 4 ?  (fieldWrapper.classList.add("required_active"), console.log("click1")) : (fieldWrapper.classList.remove("required_active"), console.log("click2"));
  })
});
reqFields.forEach(el => {
  el.addEventListener('focusout', () => {
    let elWrapper = el.parentNode;
    let fieldWrapper = elWrapper.parentNode;
    el.value.length < 4 ?  (fieldWrapper.classList.add("required_active"), console.log("focusout1")) : (fieldWrapper.classList.remove("required_active"), console.log("focusout2"));
  })
});