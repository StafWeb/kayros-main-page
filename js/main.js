gsap.registerPlugin(ScrollTrigger);
// watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


// let locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// }); 

// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)



//        locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//           return arguments.length ? locoScroll.scrollTo(value, 0, 0) :    locoScroll.scroll.instance.scroll.x;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// const tl = gsap.timeline();
let swiperBlock = document.querySelector(".swiper-wrapper");
let mySwiperBlock = gsap.to(".swiper-wrapper", {
  x: '-50%',
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".wear",
    start: 'bottom bottom',
    // end: () => swiperBlock.offsetWidth / 1,
    scrub: true,
    pin: true,
    end: `+=${swiperBlock.offsetWidth}`,
    onUpdate() {
      console.log("Update")
    }
  }
});
// ScrollTrigger.create({
//   animation: tl ,
//   trigger: ".wear",
//   // scroller:".swiper-wrapper",
//   start: 'bottom bottom',
//   // end: () => swiperBlock.offsetWidth / 1,
//   end: "+=1500",
//   scrub: true,

//   pin: true,
//   onUpdate() {
//     console.log("Update")
//   }
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

if (window.screen.width > 1000) {
  function animHead() {
    let hedAnim = gsap.timeline({ delay: 0.9 });
    // hedAnim.delay(1);
    hedAnim.from(".header__logo", { opacity: 0, duration: 0.6, ease: "power1.out" })
      .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4, ease: "power1.out" }, "-=0.5")
      .from(".first-link", { opacity: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
      .from(".second-link", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.3")
      .from(".header__form", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
      .from(".header__user", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
      .from(".header__cart", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
      .from(".header__burger", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
      .from(".header__title", { opacity: 0, y: 40, duration: 0.6, ease: "power1.out" }, "-=0.6")
      .from(".header__descr", { opacity: 0, y: 30, duration: 0.6, ease: "power1.out" }, "-=0.5")
      .from(".header__thumb", { opacity: 0, y: 20, duration: 0.6, ease: "power1.out" }, "-=0.5");
  };
  let collectionAnim = gsap.timeline({ delay: 0.4, ease: "power1.out" });
  collectionAnim.from(".collection__title", { opacity: 0, y: 10, duration: 1, })
  ScrollTrigger.create({
    animation: collectionAnim,
    trigger: ".collection",
    start: "top bottom",
  });
};

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
// let options = {
//   threshold: [0.5]
// };
// let observerHead = new IntersectionObserver(headerAnim, options);
// observerHead.observe(headerLog);
// for (let i of headerItem) {
//   observerHead.observe(i);
// }
// observerHead.observe(searchForm);
// observerHead.observe(userCab);
// observerHead.observe(cart);
// observerHead.observe(burger);
// function headerAnim(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('header-anim');
//     }
//   });
// };

// const headerTitle = document.querySelector('.header__title');
// const headerDescr = document.querySelector('.header__descr');
// const headerThumb = document.querySelector('.header__thumb');
// let observerText = new IntersectionObserver(textAnim, options);
// observerText.observe(headerTitle);
// observerText.observe(headerDescr);
// observerText.observe(headerThumb);
// function textAnim(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('header-text-anim');
//     }
//   });
// };

// let observerTwo = new IntersectionObserver(info, options);
// let titles = document.querySelectorAll('[data-info]');
// for (let tit of titles) {
//   observerTwo.observe(tit);
// };
// function info(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('fadeindown');
//     }
//   });
// };

// const btnTop = document.querySelector('.footer__bottom-btn');
// let rootElement = document.documentElement;
// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// };
// btnTop.addEventListener('click', scrollToTop);

// const btnSection = document.querySelector('.header__thumb');
// const block = document.querySelector('.collection');
// btnSection.addEventListener('click', function (e) {
//   e.preventDefault();
//   block.scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   });
// });
