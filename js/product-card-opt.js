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

let tableModal = document.querySelector(".table-modal");
let tableContainer = document.querySelector(".table-modal__container");
let tableBtn = document.querySelector(".table-size-btn");
let cardModalClose = document.querySelectorAll(".card-modal__close");
let tableClose = (modal) => { modal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); };
let tableOpen = (modal) => { modal.classList.add("card-modal_active"); body.classList.add('stop-scroll'); stop1.classList.add('stop-scroll'); };
tableBtn.addEventListener('click', () => { tableOpen(tableModal); });
tableContainer.addEventListener('click', (evt) => { evt.stopPropagation(); });
tableModal.addEventListener('click', () => { tableClose(tableModal); });
cardModalClose.forEach(el => { el.addEventListener('click', () => { tableClose(tableModal); }) });

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

let countProd = document.querySelectorAll(".order-card__count input");
let butUp = document.querySelectorAll(".step-up");
let butDown = document.querySelectorAll(".step-down");
let modalClose = document.querySelectorAll("[data-modal-close]");
let modalLim = document.querySelector("[data-modal-limit]");
let modalContain = modalLim.querySelector(".modal-cart__container");
butUp.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.previousElementSibling.firstElementChild.value;
    a == 3 ? (modalLim.classList.add("modal-cart_active"), body.classList.add('stop-scroll'), stop1.classList.add('stop-scroll')) : el.previousElementSibling.firstElementChild.value++;
  })
});
butDown.forEach(el => {
  el.addEventListener('click', () => {
    let a = el.nextElementSibling.firstElementChild.value;
    a >= 1 ? el.nextElementSibling.firstElementChild.value-- : el.style.cursor = "default";
  });
  el.addEventListener('mouseenter', () => {
    let a = el.nextElementSibling.firstElementChild.value;
    a == 0 ? el.style.cursor = "default" : el.style.cursor = "pointer";
  })
});
// butDown.forEach(el => {
//   el.addEventListener('mouseenter', () => {
//     let a = el.nextElementSibling.firstElementChild.value;
//     a == 0 ? el.style.cursor = "default" : el.style.cursor = "pointer";
//   })
// });
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