import { slider } from './commponents/slider.js';
import { burger, burgerMenu, footerMenu, catalogLink } from './commponents/menu.js';
import { tableModal, loginModal } from './commponents/modal.js';
import { windowResize, burgerScroll } from './commponents/function.js'

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
};

function modalAdd() {
  let
    addModal = document.querySelector(".modal-add"),
    btnmodal = document.querySelectorAll(".add-cart"),
    modalClose = document.querySelector(".modal-add__close");
  let close = () => { addModal.classList.remove('modal-add_active') };
  btnmodal.forEach(el => {
    if (!el.classList.contains('added')) {
      el.addEventListener('click', () => {
        addModal.classList.add('modal-add_active');
        el.textContent = "в корзине";
        el.classList.add('added');
        setTimeout(() => {
          close();
        }, 5000);
      });
    }
  });
  modalClose.addEventListener('click', () => {
    close();
  });
  document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if (keyCode === 'Escape') {
      close();
    }
  });
};

slider();
burger();
burgerMenu();
footerMenu();
tableModal();
loginModal();
modalAdd();
catalogLink();
windowResize();
burgerScroll();

let
  butUp = document.querySelectorAll(".step-up"),
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
document.addEventListener('keydown', (e) => {
  let keyCode = e.key;
  if (keyCode === 'Escape') {
    modalRemove();
  }
});