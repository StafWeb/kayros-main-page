function slider() {
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
    // keyboard: {
    //   enabled: true,
    // },
    thumbs: {
      swiper: sliderThumbs
    },
    breakpoints: {
      0: {
        freeMode: true,
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

  // let imgZoomBtn = document.querySelectorAll(".slider__zoom .slider__image"),
  //   imgZoomWrapper = document.querySelector(".slider__zoom"),
  //   swapperWrapper = document.querySelector(".slider__zoom .swiper-container"),
  //   sliderBlock = document.querySelector(".slider"),
  //   stop1 = document.documentElement,
  //   body = document.body;
  // imgZoomBtn.forEach(el => {
  //   el.addEventListener('click', () => {
  //     body.classList.add('stop-scroll');
  //     stop1.classList.add('stop-scroll');
  //     imgZoomWrapper.classList.add('slider__zoom_active');
  //     sliderBlock.classList.add('zindex');
  //   });
  // });
  // swapperWrapper.addEventListener("click", function (evt) {
  //   evt.stopPropagation();
  // });
  // imgZoomWrapper.addEventListener('click', () => {
  //   body.classList.remove('stop-scroll');
  //   stop1.classList.remove('stop-scroll');
  //   imgZoomWrapper.classList.remove('slider__zoom_active');
  //   sliderBlock.classList.remove('zindex');
  // });
};
export { slider};