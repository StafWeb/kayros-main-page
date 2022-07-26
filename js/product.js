
gsap.registerPlugin(ScrollTrigger);

// let pageContainer = document.querySelector("#simple-scroll");
// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true,
//   getSpeed: 3,
//   // reloadOnContextChange: true,
//   getDirection: true,
//   resetNativeScroll: true,
// });
// scroller.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   },
//   pinType: pageContainer.style.transform ? "transform" : "fixed"
// });
ScrollTrigger.defaults({
  // toggleActions: "restart complete reverse reset",
  toggleActions: "play none none none",
  // markers: {
  //   startColor: "green",
  //   endColor: "red",
  //   fontSize: "26px",
  // },
});
let headAnim = gsap.timeline({ delay: 0.5});

headAnim.from(".header__logo", { opacity: 0, duration: 0.6, ease: "power1.out" })
  .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4, ease: "power1.out" }, "-=0.3")
  .from(".first-link", { opacity: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
  .from(".second-link", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.3")
  .from(".header__form", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
  .from(".header__user", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
  .from(".header__cart", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
  .from(".header__burger", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5");

let footeTl = gsap.timeline({
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "20% 85%",
    toggleActions: "play none none none",
    // endTrigger: ".footer",
    // end: "bottom bottom",
    scrub: false,
  }
});
footeTl.from(".footer__contacts", { opacity: 0, y: 10, duration: 0.65 })
  .from(".footer__nav", { opacity: 0, y: 10, duration: 0.65 }, "-=0.65")
  .from(".footer__bottom-btn", { opacity: 0, y: 30, duration: 0.65 }, "+=0.8")
  .from(".footer__bottom-descr", { opacity: 0, y: 30, duration: 0.65 }, "-=0.8");

ScrollTrigger.refresh();
let rootElement = document.documentElement;
let toTopBtn = document.querySelector(".footer__bottom-btn");
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
toTopBtn.addEventListener('click', () => {
  scrollToTop();
  console.log('click');
});



const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-burger-menu]');
const burgerLog = document.querySelector('.burger__logo');
const navItems = nav?.querySelectorAll('.burger-menu__item');
const body = document.body;
const headerItem = document.querySelectorAll('.header__item');
const headerLog = document.querySelector('.header__logo')
const burgerInner = document.querySelector('[data-burger-inner]');
let stop1 = document.documentElement;
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

document.querySelectorAll(".filters").forEach(el => {
  new SimpleBar(el);
});
// new SimpleBar(document.querySelector('#simple-scroll'));


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

const filtersBtn = document.querySelectorAll(".filters__btn");
filtersBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle("filters__list_active");
    btn.classList.toggle("filters__btn_active");
  })
});

const filter = document.querySelector(".filters");
const filterBtn = document.querySelector(".filter-btn");
const filterShow = document.querySelector(".filters__btn-show");
const filterClose = document.querySelector("[data-filter-close]");

filterBtn.addEventListener('click', function () {
  stop1.classList.add('stop-scroll');
  body.classList.add('stop-scroll');
  filter.classList.add("filters_active");
  filterClose.classList.add("burger_active");

});
filterShow.addEventListener('click', function () {
  stop1.classList.remove('stop-scroll');
  body.classList.remove('stop-scroll');
  filter.classList.remove("filters_active");
  filterClose.classList.remove("burger_active");
});

filterClose.addEventListener('click', function () {
  stop1.classList.remove('stop-scroll');
  body.classList.remove('stop-scroll');
  filter.classList.remove("filters_active");
  filterClose.classList.remove("burger_active");
});

const cardsBreadcumbsBtn = document.querySelectorAll(".cards__breadcrumbs-btn");
cardsBreadcumbsBtn.forEach(el => {
  el.addEventListener('click', () => {
    el.remove('');
  });
});


