// let options = {
//   threshold: [0.3]
// };
// let coll = document.querySelector(".collection__title");
// let observerHead = new IntersectionObserver(sec, options);
// observerHead.observe(headerLog);
// for (let i of headerItem) {
//   observerHead.observe(i);
// }
// observerHead.observe(searchForm);
// observerHead.observe(userCab);
// observerHead.observe(cart);
// observerHead.observe(burger);
// observerHead.observe(coll);
// function sec(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       sa.play();
//     }
//   });
// };
// (function () {
//   document.documentElement.classList.add('is-loaded');
//   document.documentElement.classList.remove('is-loading');

//   setTimeout(() => {
//     document.documentElement.classList.add('is-ready');
//   }, 300)

//   let options = {
//     el: document.querySelector('#viewport'),
//     smooth: true,
//     getSpeed: true,
//     getDirection: true
//   }

//   if (document.querySelector('#viewport').getAttribute('data-horizontal') == 'true') {
//     options.direction = 'horizontal';
//     options.gestureDirection = 'both';
//     options.tablet = {
//       smooth: true,
//       direction: 'horizontal',
//       horizontalGesture: true
//     }
//     options.smartphone = {
//       smooth: false
//     }
//     options.reloadOnContextChange = true
//   }

// })();


gsap.registerPlugin(ScrollTrigger);
// let pageContainer = document.querySelector(".scrolsmooth");
// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: false,
//   getSpeed: true,
//   getDirection: true
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
// let headAnim = gsap.timeline({ delay: 0.7 });
// headAnim.fromTo(".header__background", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1.3, ease: "power3.inOut" })
//   .from(".header__logo", { opacity: 0, duration: 0.6, ease: "power1.out" })
//   .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4, ease: "power1.out" }, "-=0.5")
//   .from(".first-link", { opacity: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
//   .from(".second-link", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.3")
//   .from(".header__form", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
//   .from(".header__user", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
//   .from(".header__cart", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
//   .from(".header__burger", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
//   .from(".header__title", { opacity: 0, y: 40, duration: 0.6, ease: "power1.out" }, "-=0.6")
//   .from(".header__descr", { opacity: 0, y: 30, duration: 0.6, ease: "power1.out" }, "-=0.5")
//   .from(".header__thumb", { opacity: 0, y: 20, duration: 0.6, ease: "power1.out" }, "-=0.5");

// ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();
// function stopOverscroll(element) {
//   element = gsap.utils.toArray(element)[0] || window;
//   (element === document.body || element === document.documentElement) && (element = window);
//   let lastScroll = 0,
//     lastTouch, forcing,
//     forward = true,
//     isRoot = element === window,
//     scroller = isRoot ? document.scrollingElement : element,
//     ua = window.navigator.userAgent + "",
//     getMax = isRoot ? () => scroller.scrollHeight - window.innerHeight : () => scroller.scrollHeight - scroller.clientHeight,
//     addListener = (type, func) => element.addEventListener(type, func, { passive: false }),
//     revert = () => {
//       scroller.style.overflowY = "auto";
//       forcing = false;
//     },
//     kill = () => {
//       forcing = true;
//       scroller.style.overflowY = "hidden";
//       (!forward && scroller.scrollTop < 1) ? (scroller.scrollTop = 1) : (scroller.scrollTop = getMax() - 1);
//       setTimeout(revert, 1);
//     },
//     handleTouch = e => {
//       let evt = e.changedTouches ? e.changedTouches[0] : e,
//         forward = evt.pageY <= lastTouch;
//       if (((!forward && scroller.scrollTop <= 1) || (forward && scroller.scrollTop >= getMax() - 1)) && e.type === "touchmove") {
//         e.preventDefault();
//       } else {
//         lastTouch = evt.pageY;
//       }
//     },
//     handleScroll = e => {
//       if (!forcing) {
//         let scrollTop = scroller.scrollTop;
//         forward = scrollTop > lastScroll;
//         if ((!forward && scrollTop < 1) || (forward && scrollTop >= getMax() - 1)) {
//           e.preventDefault();
//           kill();
//         }
//         lastScroll = scrollTop;
//       }
//     };
//   if ("ontouchend" in document && !!ua.match(/Version\/[\d\.]+.*Safari/)) {
//     addListener('scroll', handleScroll);
//     addListener('touchstart', handleTouch);
//     addListener('touchmove', handleTouch);
//   }
//   scroller.style.overscrollBehavior = "none";
// };

// let box = document.querySelectorAll('.cards__item');
// let btnOffer = document.querySelector('.offer__button');
// for (let i = 4; i < box.length; i++) {
//   box[i].style.display = "none";
// }
// let countD = 4;
// btnOffer.addEventListener("click", function () {
//   countD += 4;
//   if (countD <= box.length) {
//     for (let i = 0; i < countD; i++) {
//       box[i].style.display = "flex";
//     }
//   }
// });

// stopOverscroll(document.querySelector(".header"));

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
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  burgerLog.classList.toggle('burger__logo_active');
  burgerInner.classList.toggle('burger_active')
});
burgerInner.addEventListener('click', () => {
  stop1.classList.remove('stop-scroll');
  burgerInner.classList.remove('burger_active')
  burger.classList.remove('burger_active');
  nav.classList.remove('burger-menu_active');
  burgerLog.classList.remove('burger__logo_active');
})
navItems.forEach(el => {
  el.addEventListener('click', () => {
    stop1.classList.remove('stop-scroll');
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
});

const filtersBtn = document.querySelectorAll(".filters__btn");
filtersBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle("filters__list_active");
    btn.classList.toggle("filters__btn_active");
  })
});
document.querySelectorAll(".simple-scroll").forEach(el => {
  new SimpleBar(el);
});

const filter = document.querySelector(".filters");
const filterBtn = document.querySelector(".filter-btn");
const filterShow = document.querySelector(".filters__btn-show");
const filterClose = document.querySelector("[data-filter-close]");

filterBtn.addEventListener('click', function() {
  stop1.classList.add('stop-scroll');
  body.classList.add('stop-scroll');
  filter.classList.add("filters_active");
  filterClose.classList.add("burger_active");

});
filterShow.addEventListener('click', function() {
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