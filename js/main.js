const burger = document?.querySelector('[data-burger]');
burger?.addEventListener('click', () => {
  // body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  // nav?.classList.toggle('nav--visible');
  // overlayNav.classList.toggle('show');
});

// navItems.forEach(el => {
//   el.addEventListener('click', () => {
//     body.classList.remove('stop-scroll');
//     burger?.classList.remove('burger--active');
//     nav?.classList.remove('nav--visible');
//     overlayNav.classList.remove('show');
//   });
// });

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let swiperDescr = document.querySelectorAll('.swiper-slide');
for (let des of swiperDescr) {
  observer.observe(des);
};
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('slideinup');
      console.log(change.target);
    }
  });
};

let observerTwo = new IntersectionObserver(info, options);
let titles = document.querySelectorAll('[data-info]');
for (let tit of titles) {
  observerTwo.observe(tit);
};
function info(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('fadeindown');
      // console.log(change.target);
    } 
  });
};







const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  speed: 1600,
  slidesPerGroup: 2,
  // parallax: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  // spaceBetween: 30,
  // centeredSlidesBounds:true,
  passiveListeners: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 0.7,
    // thresholdTime: 100,
    // thresholdDelta: 0.3,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    // clickable: true,
  },
});
