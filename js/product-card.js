gsap.registerPlugin(ScrollTrigger);
import { slider } from './commponents/slider.js';
import { burger, burgerMenu, footerMenu, catalogLink } from './commponents/menu.js';
import { tableModal, loginModal } from './commponents/modal.js';
import { windowResize, burgerScroll } from './commponents/function.js'

function fixBtn() {
  let btnViewport = document.querySelector(".add-product-viewport");
  let btnFixed = document.querySelector(".add-product-fixed");
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: upValue
  });
  function upValue() {
    let a = ScrollTrigger.isInViewport(btnViewport);
    a == true ? btnFixed.classList.remove('add-product-fixed_active') : btnFixed.classList.add('add-product-fixed_active');
  };
};

let headAnim = gsap.timeline({ ease: "power1.out" });
  headAnim.to(".anim", { opacity: 1, duration: 0.2 })
if (window.matchMedia("(min-width: 1001px)").matches) {
  headAnim.from(".header__logo", { opacity: 0, duration: 0.6 })
    .fromTo(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4 }, { opacity:1, rotate: 0 }, "-=0.4")
    .from(".item1", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".items", { opacity: 0, x: -5, duration: 0.6 }, "-=0.4")
    .from(".header__end-anim", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5");
} else {
  document.querySelectorAll(".burger-menu__wrapper").forEach(el => {
    new SimpleBar(el);
  });
  fixBtn();
}

slider();
burger();
burgerMenu();
footerMenu();
tableModal();
loginModal();
catalogLink();
windowResize();
burgerScroll();

let
  addCartBtn = document.querySelectorAll(".add-product"),
  cardModal = document.querySelector(".card-modal"),
  cardModalContain = document.querySelector(".card-modal__container"),
  cardModalClose = document.querySelectorAll(".card-modal__close"),
  cardModalBtn = document.querySelectorAll(".card-modal__btn"),
  body = document.body,
  stop1 = document.documentElement;
let modalClose = (modal) => { modal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
let modalOpen = (modal) => { modal.classList.add("card-modal_active"); body.classList.add('stop-scroll'); stop1.classList.add('stop-scroll'); };
addCartBtn.forEach(el => { el.addEventListener('click', () => { modalOpen(cardModal) }) });
cardModalContain.addEventListener('click', (evt) => { evt.stopPropagation(); });
cardModal.addEventListener('click', () => { modalClose(cardModal) });
cardModalClose.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal) }) });
cardModalBtn.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal) }) });
document.addEventListener('keydown', (e) => {
  let keyCode = e.key;
  if (keyCode === 'Escape') {
    modalClose(cardModal);
  }
});






