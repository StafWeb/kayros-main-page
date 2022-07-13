gsap.registerPlugin(ScrollTrigger);



const tl = gsap.timeline();
tl.fromTo(".swiper-wrapper", { x: 0, y: 0 }, { x: '-50%' })
const swiperBlock = document.querySelector(".wear");
ScrollTrigger.create({
  animation: tl,
  trigger: ".wear",
  // scroller:".swiper-block",
  start: 'bottom bottom',
  end: () => swiperBlock.offsetWidth / 1,
  // snap: true,
  scrub: true,
  pin: true,
  onUpdate() {
    console.log("Update")
  }
});





const headerNav = document.querySelector('.header__nav');
const searchForm = document.querySelector('.header__form');
const userCab = document.querySelector('.header__user');
const cart = document.querySelector('.header__cart');
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-burger-menu]');
const burgerLog = document.querySelector('.burger__logo');
const navItems = nav?.querySelectorAll('.burger-menu__item');
const body = document.body;
const scrollMain = document.querySelector('.main');
const headerItem = document.querySelectorAll('.header__item');
const headerLog = document.querySelector('.header__logo')
const burgerInner = document.querySelector('[data-burger-inner]');

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  scrollMain.classList.toggle('stop-scroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  burgerLog.classList.toggle('burger__logo_active');
  burgerInner.classList.toggle('burger_active')
});
burgerInner.addEventListener('click', () => {
  burgerInner.classList.remove('burger_active')
  body.classList.remove('stop-scroll');
  scrollMain.classList.remove('stop-scroll');
  burger.classList.remove('burger_active');
  nav.classList.remove('burger-menu_active');
  burgerLog.classList.remove('burger__logo_active');
})
navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    scrollMain.classList.remove('stop-scroll');
    burger.classList.remove('burger_active');
    nav.classList.remove('burger-menu_active');
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
const burgerBtn = document.querySelectorAll(".inner-btn");
burgerBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('inner-btn_active');
    this.nextElementSibling.classList.toggle("list_active");
  })
})
let options = {
  threshold: [0.5]
};
let observerHead = new IntersectionObserver(headerAnim, options);
observerHead.observe(headerLog);
for (let i of headerItem) {
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

const btnTop = document.querySelector('.footer__bottom-btn');
let rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};
btnTop.addEventListener('click', scrollToTop);

const btnSection = document.querySelector('.header__thumb');
const block = document.querySelector('.collection');
btnSection.addEventListener('click', function (e) {
  e.preventDefault();
  block.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
