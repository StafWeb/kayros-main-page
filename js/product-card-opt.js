import { sliderAndZoom } from './commponents/slider.js';
import { burger, burgerMenu, footerMenu } from './commponents/menu.js';
import { tableModal, loginModal } from './commponents/modal.js';
if (window.innerWidth > 1000) {
  let headAnim = gsap.timeline({ delay: 0.5, ease: "power1.out" });
  headAnim.from(".header__logo", { opacity: 0, duration: 0.6 })
    .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4 }, "-=0.4")
    .from(".item1", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".items", { opacity: 0, x: -5, duration: 0.6 }, "-=0.4")
    .from(".header__form", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5");
};
sliderAndZoom();
burger();
burgerMenu();
footerMenu();
tableModal();
loginModal();

let butUp = document.querySelectorAll(".step-up"),
  butDown = document.querySelectorAll(".step-down"),
  modalClose = document.querySelectorAll("[data-modal-close]"),
  modalLim = document.querySelector("[data-modal-limit]"),
  modalContain = modalLim.querySelector(".modal-cart__container"),
  body = document.body,
  stop1 = document.documentElement;
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

modalContain.addEventListener('click', (evt) => { evt.stopPropagation(); });
let modalRemove = () => { modalLim.classList.remove('modal-cart_active'); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
modalLim.addEventListener('click', () => {
  modalRemove();
});
modalClose.forEach(el => {
  el.addEventListener('click', () => {
    modalRemove();
  })
});


document.querySelectorAll(".simpScroll").forEach(el => {
  new SimpleBar(el, { autoHide: false });
});
if (window.innerWidth <= 1000){
  document.querySelectorAll(".burger-menu__wrapper").forEach(el => {
    new SimpleBar(el);
  });
 };