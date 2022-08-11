let delProductBtn = document.querySelectorAll(".order-card__btn");
let modalClose = document.querySelectorAll("[data-modal-close]");
let modalAll = document.querySelectorAll(".modal-cart");
let modalDel = document.querySelector("[data-modal-delete]");
let modalLim = document.querySelector("[data-modal-limit]");
let modalContain = document.querySelectorAll(".modal-cart__container");
let stop1 = document.documentElement;
let body = document.body;
delProductBtn.forEach(el => {
  el.addEventListener('click', () => {
    modalDel.classList.add("modal-cart_active")
    body.classList.add('stop-scroll');
    stop1.classList.add('stop-scroll');
  })
});
modalContain.forEach(el => {
  el.addEventListener('click', (evt) => {
    evt.stopPropagation();
  })
});
let modalRemove = () => { modalDel.classList.remove('modal-cart_active'); modalLim.classList.remove('modal-cart_active'); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
modalClose.forEach(el => {
  el.addEventListener('click', () => {
    modalRemove();
  })
});
modalAll.forEach(el => {
  el.addEventListener('click', () => {
    modalRemove();
  })
});

const footerBtn = document.querySelectorAll("[data-menu]");
footerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
    this.nextElementSibling.classList.toggle("footer__list_active");
  });
});

let countProd = document.querySelectorAll(".order-card__count input");
let butUp = document.querySelectorAll(".step-up");
let butDown = document.querySelectorAll(".step-down");
butUp.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.previousElementSibling.firstElementChild.value;
    a == 3 ? (modalLim.classList.add("modal-cart_active"), body.classList.add('stop-scroll'), stop1.classList.add('stop-scroll')) : el.previousElementSibling.firstElementChild.value++ ;
  })
});
butDown.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.nextElementSibling.firstElementChild.value;
    a > 0 ? el.nextElementSibling.firstElementChild.value-- : (el.style.cursor = "default", console.log(el));
  })
});