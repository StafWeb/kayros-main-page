gsap.registerPlugin(ScrollTrigger);

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
// }
if (window.onload || document.querySelector(".scrolsmooth").offsetWidth > 1000){
let pageContainer = document.querySelector(".scrolsmooth");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  resetNativeScroll: false
  // scrollbarContainer: false
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
ScrollTrigger.refresh();
ScrollTrigger.defaults({
  toggleActions:"restart complete reverse reset",
  markers:{
    startColor : "green",
    endColor: "red",
    fontSize: "26px",
  },
});
let pinBoxes = document.querySelectorAll(".pin-wrap > *");
let pinWrap = document.querySelector(".pin-wrap");
let pinWrapWidth = pinWrap.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;
let mySwiperBlock = gsap.to(".swiper-wrapper", {
  x: -horizontalScrollLength,
  ease: "none",
  scrollTrigger: {
    trigger: ".wear",
    start: 'bottom bottom',
    scroller: pageContainer,
    // end: () => swiperBlock.offsetWidth / 1,
    scrub: true,
    pin: true,
    end: pinWrapWidth,
    onUpdate() {
      console.log("Update")
    }
  }
});
let swiperAnim = gsap.timeline({ease:"none"});
swiperAnim.from(".wear__text-title",{opacity:0, y:-30})
.from(".wear__text-descr",{})
let colletctionTl = gsap.timeline({ ease: "none" });
colletctionTl.from(".collection__title", { opacity: 0, y: 10, duration:1 })
  .from(".collection__descr", { opacity: 0, y: 7, duration:0.6 }, "-=0.9")
  .fromTo(".collection__overlay", {scaleY: 1}, {scaleY:0, transformOrigin:"center top", duration: 0.7, stagger: 0.1},"-=0.7")
  .from(".collection__item", {opacity:0, y:30, transformOrigin:"center top", duration: 0.7, stagger:0.1}, "-=0.5")
  .from(".collection__item-link", {opacity:0 , y:15, stagger:0.1, duration:0.5}, "-=0.5");
let collectionTrig = ScrollTrigger.create({
  animation: colletctionTl,
  trigger: ".collection",
  start: "10% 65%",
  scroller: pageContainer,
  reverse: true,
  endTrigger:".wear",
  end: "top 75%",
  markerks: true,
  scrub: 1,
  onUpdate() {
    console.log("Update2")
  }
});
function animHead() {
  let hedAnim = gsap.timeline({ delay: 0.9 });
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
    .from(".header__thumb", { opacity: 0, y: 20, duration: 0.6, ease: "power1.out" }, "-=0.5")
  // .from(".collection__title", {opacity:0, y: 30, duration: 1, ease: "power1.out"}, "+=3")
};
animHead();
}

// let collect = gsap.timeline();
// collect.from(".colletction__title", {
//   opacity: 0,
//   y: 50,
//   duration: 3,
//   ease: "none",
//   ScrollTrigger: {
//     trigger: ".collection",
//     start: "bottom bottom",
//     scroller: pageContainer,
//     end: "+=800",
//     scrub: 0.3,
//     onUpdate() {
//       console.log("Update2")
//     }
//   }
// });





// let swiperBlock = document.querySelector(".swiper-wrapper");
// let mySwiperBlock = gsap.to(".swiper-wrapper", {
//   x: '-50%',
//   ease: "none",
//   duration: 6,
//   scrollTrigger: {
//     trigger: ".wear",
//     start: 'bottom bottom',
//     // end: () => swiperBlock.offsetWidth / 1,
//     scrub: 0.4,
//     pin: true,
//     end: `+=${swiperBlock.offsetWidth}`,
//     onUpdate() {
//       console.log("Update")
//     }
//   }
// });
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
const headerItem = document.querySelectorAll('.header__item');
const headerLog = document.querySelector('.header__logo')
const burgerInner = document.querySelector('[data-burger-inner]');
let stop1 = document.documentElement;
let stop2 = document.querySelector(".main");
burger.addEventListener('click', () => {
  // body.classList.toggle('stop-scroll');
  stop1.classList.toggle('stop-scroll');
  // stop2.classList.toggle('stop-sroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  burgerLog.classList.toggle('burger__logo_active');
  burgerInner.classList.toggle('burger_active')
});
burgerInner.addEventListener('click', () => {
  stop1.classList.remove('stop-scroll');
  // stop2.classList.remove('stop-sroll');
  burgerInner.classList.remove('burger_active')
  // body.classList.remove('stop-scroll');
  burger.classList.remove('burger_active');
  nav.classList.remove('burger-menu_active');
  burgerLog.classList.remove('burger__logo_active');
})
navItems.forEach(el => {
  el.addEventListener('click', () => {
    stop1.classList.remove('stop-scroll');
    // stop2.classList.remove('stop-sroll');
    // body.classList.remove('stop-scroll');
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
//   threshold: [0.3]
// };
// let coll = document.querySelector(".collection__title");
// let observerHead = new IntersectionObserver(sec, options);
// // observerHead.observe(headerLog);
// // for (let i of headerItem) {
// //   observerHead.observe(i);
// // }
// // observerHead.observe(searchForm);
// // observerHead.observe(userCab);
// // observerHead.observe(cart);
// // observerHead.observe(burger);
// observerHead.observe(coll);
// function sec(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       sa.play();
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
// btnTop.addEventListener('click', scrollToTop());

// const btnSection = document.querySelector('.header__thumb');
// const block = document.querySelector('.collection');
// btnSection.addEventListener('click', function (e) {
//   e.preventDefault();
//   block.scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   });
// });
