import { slider } from './commponents/slider.js';
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

slider();
burger();
burgerMenu();
footerMenu();
tableModal();
loginModal();

let addCartBtn = document.querySelector(".add-product"),
  cardModal = document.querySelector(".card-modal"),
  cardModalContain = document.querySelector(".card-modal__container"),
  cardModalClose = document.querySelectorAll(".card-modal__close"),
  cardModalBtn = document.querySelectorAll(".card-modal__btn"),
  body = document.body,
  stop1 = document.documentElement;
let modalClose = (modal) => { modal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
let modalOpen = (modal) => { modal.classList.add("card-modal_active"); body.classList.add('stop-scroll'); stop1.classList.add('stop-scroll'); };
addCartBtn.addEventListener('click', () => { modalOpen(cardModal) });
cardModalContain.addEventListener('click', (evt) => { evt.stopPropagation(); });
cardModal.addEventListener('click', () => { modalClose(cardModal) });
cardModalClose.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal) }) });
cardModalBtn.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal) }) });



// document.querySelectorAll(".simpScroll").forEach(el => {
//   new SimpleBar(el, { autoHide: false });
// });
if (window.innerWidth <= 1000){
  document.querySelectorAll(".burger-menu__wrapper").forEach(el => {
    new SimpleBar(el);
  });
 };