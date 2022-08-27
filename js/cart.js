let
  delProductBtn = document.querySelectorAll(".order-card__btn"),
  modalClose = document.querySelectorAll("[data-modal-close]"),
  modalAll = document.querySelectorAll(".modal-cart"),
  modalDel = document.querySelector("[data-modal-delete]"),
  modalLim = document.querySelector("[data-modal-limit]"),
  modalContain = document.querySelectorAll(".modal-cart__container"),
  butUp = document.querySelectorAll(".step-up"),
  butDown = document.querySelectorAll(".step-down"),
  stop1 = document.documentElement,
  body = document.body;
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
document.addEventListener('keydown', (e) => {
  let keyCode = e.key;
  if (keyCode === 'Escape') {
    modalRemove();
  }
});

butUp.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.previousElementSibling.firstElementChild.value;
    a == 3 ? (modalLim.classList.add("modal-cart_active"), body.classList.add('stop-scroll'), stop1.classList.add('stop-scroll')) : el.previousElementSibling.firstElementChild.value++;
  })
});
butDown.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.nextElementSibling.firstElementChild.value;
    a > 0 ? el.nextElementSibling.firstElementChild.value-- : (el.style.cursor = "default");
  });
  el.addEventListener('mouseenter', () => {
    let a = el.nextElementSibling.firstElementChild.value;
    a == 0 ? el.style.cursor = "default" : el.style.cursor = "pointer";
  })
});