const headerNav = document.querySelector('.header__nav');
const headerHover = document.querySelector('.header__hover')
const searchForm = document.querySelector('.header__form');
const userCab = document.querySelector('.header__user');
const cart = document.querySelector('.header__cart');
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-burger-menu]');
const burgerLog = document.querySelector('.burger__logo');
const headerLog = document.querySelector('.header__logo');
const navItems = nav?.querySelectorAll('.burger-menu__item');
const body = document.body;
const headerItem = document.querySelectorAll('.header__item');


burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  headerLog.classList.toggle('none');
  burgerLog.classList.toggle('burger__logo_active');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger_active');
    nav.classList.remove('burger-menu_active');
    headerLog.classList.remove('none');
    burgerLog.classList.remove('burger__logo_active');
  });
});

const footerBtn = document.querySelectorAll("[data-menu]");
footerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
    this.nextElementSibling.classList.toggle("list_active");
  });
});

let options = {
  threshold: [0.5]
};
let observerHead = new IntersectionObserver(headerAnim, options);
observerHead.observe(headerLog);
for(let i of headerItem){
  observerHead.observe(i);
}
observerHead.observe(searchForm);
observerHead.observe(userCab);
observerHead.observe(cart);
observerHead.observe(burger);
function headerAnim(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('header-anim');
    }
  });
};

const headerTitle = document.querySelector('.header__title');
const headerDescr = document.querySelector('.header__descr');
const headerThumb = document.querySelector('.header__thumb');
let observerText = new IntersectionObserver(textAnim, options);
observerText.observe(headerTitle);
observerText.observe(headerDescr);
observerText.observe(headerThumb);
function textAnim(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('header-text-anim');
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
