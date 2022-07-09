const headerNav = document.querySelector('.header__nav');
const headerHover = document.querySelector('.header__hover')
const searchForm = document.querySelector('.header__form');
const userCab = document.querySelector('.header__user');
const cart = document.querySelector('.header__cart');
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[dara-burger-menu]');
const burgerLog = document.querySelector('.burger__logo');
const headerLog = document.querySelector('.header__logo');
// const navItems = nav?.querySelectorAll('.header__nav_link');
// const overlayNav = document?.querySelector('.overlay-nav');
const body = document.body;
// const header = document?.querySelector('.header');
// const headerHeight = header.offsetHeight;
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  headerLog.classList.toggle('none');
  burgerLog.classList.toggle('burger__logo_active');
  // userCab.classList.toggle('none');
  // cart.classList.toggle('none');
  // headerNav.classList.toggle('none');
  // headerHover.classList.toggle('header__hover_active');
  logo.classList.toggle('header__logo_active');
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

const footerBtn = document.querySelectorAll("[data-footer-menu]");
footerBtn.forEach(function (btn) {
	btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
		this.nextElementSibling.classList.toggle("footer__list_active");
	});
});

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
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'progressbar',
  //   // clickable: true,
  // },
});
