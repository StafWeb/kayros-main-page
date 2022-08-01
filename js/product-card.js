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
const body = document.body;
imgZoomBtn.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.add('stop-scroll');
    imgZoomWrapper.classList.add('slider__zoom_active');
    sliderBlock.classList.add('zindex');
  });
});
swapperWrapper.addEventListener("click", function (evt) {
  evt.stopPropagation();
});
imgZoomWrapper.addEventListener('click', () => {
  body.classList.remove('stop-scroll');
  imgZoomWrapper.classList.remove('slider__zoom_active');
  sliderBlock.classList.remove('zindex');
});

let addCartBtn = document.querySelector(".add-product");
let cartModal = document.querySelector(".cart-modal");
let cartModalContain = document.querySelector(".cart-modal__container");
let cartModalClose = document.querySelector(".cart-modal__close");
let cartModalBtn = document.querySelectorAll(".cart-modal__btn");
addCartBtn.addEventListener('click', () => {
  cartModal.classList.add("cart-modal_active");
  body.classList.add('stop-scroll');
});
cartModalContain.addEventListener('click', (evt) => {
  evt.stopPropagation();
});
cartModal.addEventListener('click', () => {
  cartModal.classList.remove("cart-modal_active");
  body.classList.remove('stop-scroll');
});
cartModalClose.addEventListener('click', () => {
  cartModal.classList.remove("cart-modal_active");
  body.classList.remove('stop-scroll');
});
cartModalBtn.forEach(el => {
  el.addEventListener('click', () => {
    cartModal.classList.remove("cart-modal_active");
    body.classList.remove('stop-scroll');
  })
});

document.querySelectorAll(".cards").forEach(el => {
  new SimpleBar(el, { autoHide: false });
});