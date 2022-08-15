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
let sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 17,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },
});
let sliderImages = new Swiper('.slider__zoom .swiper-container', {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
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
let cardModalClose = document.querySelectorAll(".card-modal__close");
let cardModalBtn = document.querySelectorAll(".card-modal__btn");
let tableModal = document.querySelector(".table-modal");
let tableContainer = document.querySelector(".table-modal__container");
let tableBtn = document.querySelector(".table-size-btn");
let modalClose = (modal) => { modal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
let modalOpen = (modal) => { modal.classList.add("card-modal_active"); body.classList.add('stop-scroll'); stop1.classList.add('stop-scroll'); };
addCartBtn.addEventListener('click', () => { modalOpen(cardModal); });
tableBtn.addEventListener('click', () => { modalOpen(tableModal); });
cardModalContain.addEventListener('click', (evt) => { evt.stopPropagation(); });
tableContainer.addEventListener('click', (evt) => { evt.stopPropagation(); });
tableModal.addEventListener('click', () => { modalClose(tableModal); });
cardModal.addEventListener('click', () => { modalClose(cardModal); });
cardModalClose.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal); modalClose(tableModal); }) });
cardModalBtn.forEach(el => { el.addEventListener('click', () => { modalClose(cardModal); }) });

let burger = document?.querySelector('[data-burger]');
let nav = document?.querySelector('[data-burger-menu]');
let burgerLog = document.querySelector('.burger__logo');
let navItems = nav?.querySelectorAll('.burger-menu__item');
let burgerInner = document.querySelector('[data-burger-inner]');
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

let footerBtn = document.querySelectorAll("[data-menu]");
footerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
    this.nextElementSibling.classList.toggle("footer__list_active");
  });
});
let burgerBtn = document.querySelectorAll(".inner-btn");
burgerBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('inner-btn_active');
    this.nextElementSibling.classList.toggle("burger__list_active");
  })
});

document.querySelectorAll(".simpScroll").forEach(el => {
  new SimpleBar(el, { autoHide: false });
});