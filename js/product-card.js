const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 17,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },
});
const sliderImages = new Swiper('.slider__zoom .swiper-container', {
  slidesPerView: 1,
  thumbs: {
    swiper: sliderThumbs
  },
  breakpoints: {
    0: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10,
      allowTouchMove: true,
    },
    1000: {
      spaceBetween: 32,
      direction: 'vertical',
      navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
      },

    }
  }
});

let imgZoomBtn = document.querySelectorAll(".slider__zoom .slider__image");
let imgZoomWrapper = document.querySelector(".slider__zoom");
let swapperWrapper = document.querySelector(".slider__zoom .swiper-container");
let sliderBlock = document.querySelector(".slider");
let stop1 = document.documentElement;
let body = document.body;
imgZoomBtn.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.add('stop-scroll');
    stop1.classList.add('stop-scroll');
    imgZoomWrapper.classList.add('slider__zoom_active');
    sliderBlock.classList.add('zindex');
  });
});
swapperWrapper.addEventListener("click", function (evt) {
  evt.stopPropagation();
});
imgZoomWrapper.addEventListener('click', () => {
  body.classList.remove('stop-scroll');
  stop1.classList.remove('stop-scroll');
  imgZoomWrapper.classList.remove('slider__zoom_active');
  sliderBlock.classList.remove('zindex');
});

let addCartBtn = document.querySelector(".add-product");
let cardModal = document.querySelector(".card-modal");
let cardModalContain = document.querySelector(".card-modal__container");
let cardModalClose = document.querySelector(".card-modal__close");
let cardModalBtn = document.querySelectorAll(".card-modal__btn");
let modalClose = () => { cardModal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
addCartBtn.addEventListener('click', () => {
  cardModal.classList.add("card-modal_active");
  body.classList.add('stop-scroll');
  stop1.classList.add('stop-scroll');
});
cardModalContain.addEventListener('click', (evt) => {
  evt.stopPropagation();
});
cardModal.addEventListener('click', () => {
  modalClose();
});
cardModalClose.addEventListener('click', () => {
  modalClose();
});
cardModalBtn.forEach(el => {
  el.addEventListener('click', () => {
    modalClose();
  })
});

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-burger-menu]');
const burgerLog = document.querySelector('.burger__logo');
const navItems = nav?.querySelectorAll('.burger-menu__item');
const burgerInner = document.querySelector('[data-burger-inner]');
burger.addEventListener('click', () => {
  stop1.classList.toggle('stop-scroll');
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  burgerLog.classList.toggle('burger__logo_active');
  burgerInner.classList.toggle('burger_active')
});
burgerInner.addEventListener('click', () => {
  stop1.classList.remove('stop-scroll');
  body.classList.remove('stop-scroll');
  burgerInner.classList.remove('burger_active')
  burger.classList.remove('burger_active');
  nav.classList.remove('burger-menu_active');
  burgerLog.classList.remove('burger__logo_active');
})
navItems.forEach(el => {
  el.addEventListener('click', () => {
    stop1.classList.remove('stop-scroll');
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger_active');
    nav.classList.remove('burger-menu_active');
    burgerLog.classList.remove('burger__logo_active');
  });
});

const footerBtn = document.querySelectorAll("[data-menu]");
footerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
    this.nextElementSibling.classList.toggle("footer__list_active");
  });
});
const burgerBtn = document.querySelectorAll(".inner-btn");
burgerBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('inner-btn_active');
    this.nextElementSibling.classList.toggle("burger__list_active");
  })
});

document.querySelectorAll(".cards").forEach(el => {
  new SimpleBar(el, { autoHide: false });
});