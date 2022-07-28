

if (window.innerWidth > 1000) {
  const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 'auto', // показывать по 3 превью
    spaceBetween: 17, // расстояние между слайдами
    navigation: { // задаем кнопки навигации
      nextEl: '.slider__next', // кнопка Next
      prevEl: '.slider__prev' // кнопка Prev
    },
    // freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: { // условия для разных размеров окна браузера
      0: { // при 0px и выше
        direction: 'horizontal', // горизонтальная прокрутка
      },
      1000: { // при 768px и выше
        // direction: 'vertical', // вертикальная прокрутка
      }
    }
  });
  const sliderImages = new Swiper('.slider__zoom .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev'
    },
    grabCursor: true,
    thumbs: {
      swiper: sliderThumbs
    },
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      1000: {
        direction: 'vertical',
      }
    }
  });
};

let imgZoomBtn = document.querySelectorAll(".slider__zoom .slider__image");
let imgZoomWrapper = document.querySelector(".slider__zoom");
let swapperWrapper = document.querySelector(".slider__zoom .swiper-container");
const body = document.body;
imgZoomBtn.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.add('stop-scroll');
    imgZoomWrapper.classList.add('slider__zoom_active');
  });
});
swapperWrapper.addEventListener("click", function (evt) {
  evt.stopPropagation();
});
imgZoomWrapper.addEventListener('click', () => {
  body.classList.remove('stop-scroll');
  imgZoomWrapper.classList.remove('slider__zoom_active');
});