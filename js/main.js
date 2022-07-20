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
let pageContainer = document.querySelector("#viewport");
/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  getSpeed: true,
  reloadOnContextChange: true,
  getDirection: true
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
ScrollTrigger.defaults({
  // toggleActions: "restart complete reverse reset",
  toggleActions: "play none none none",
  // markers: {
  //   startColor: "green",
  //   endColor: "red",
  //   fontSize: "26px",
  // },
});
if (window.innerWidth > 1000) {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  let mySwiperBlock = gsap.to(".swiper-wrapper", {
    x: "-50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".wear",
      start: 'bottom bottom',
      scroller: pageContainer,
      scrub: true,
      pin: true,
      end: pinWrapWidth,
      onUpdate() {
        console.log("Update")
      }
    }
  });
  let swiperAnim = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      scroller: pageContainer,
      trigger: ".swiper-wrapper",
      start: "25% 85%",
      end: "bottom bottom",
      scrub: true,
    }
  });
  swiperAnim.from(".swiper__text-title", { opacity: 0, y: 30, duration: 0.6 })
    .from(".swiper__text-descr", { opacity: 0, y: 30, duration: 0.6 }, "-=0.5")
    .fromTo(".swiper__card", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, stagger: 0.1 }, "-=0.5");

  let colletctionTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".collection",
      // toggleActions: "play none none none",
      start: "7% 85%",
      scroller: pageContainer,
      endTrigger: ".collection__list",
      end: "bottom 95%",
      scrub: 1,
      onUpdate() {
        console.log("Update2")
      }
    }
  });
  colletctionTl.from(".collection__title", { opacity: 0, y: 20, duration: 1 })
    .from(".collection__descr", { opacity: 0, y: 15, duration: 0.6 }, "-=0.9")
    .fromTo(".collection__overlay", { scaleY: 1 }, { scaleY: 0, transformOrigin: "center top", duration: 0.7, stagger: 0.1 }, "-=0.7")
    .from(".collection__item", { opacity: 0, y: 40, transformOrigin: "center top", duration: 0.7, stagger: 0.1 }, "-=0.65")
    .from(".collection__item-link", { opacity: 0, y: 15, stagger: 0.1, duration: 0.5 }, "-=0.55");

  let offerTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".offer",
      start: "5% bottom",
      scroller: pageContainer,
      end: "bottom bottom",
      scrub: 1,
      onUpdate() {
        console.log("Update2")
      }
    }
  });
  offerTl.from(".offer__title", { opacity: 0, y: 20, duration: 1 })
    .from(".cards__filter-link", { opacity: 0, y: 15, duration: 0.6 }, "-=0.8")
    .from(".cards__item", { opacity: 0, y: 20, duration: 0.3, stagger: 0.1 }, "-=0.8");

  let infoTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".info",
      start: "20% 85%",
      scroller: pageContainer,
      endTrigger: ".footer",
      end: "10% bottom",
      scrub: 1,
    }
  });
  infoTl.from(".info__start-text", { opacity: 0, y: 30, duration: 0.65, stagger: 0.2 })
    .from(".info__company", { opacity: 0, y: 10, duration: 0.65 }, "-=0.6")
    .from(".info__end-text", { opacity: 0, y: 30, duration: 0.65, stagger: 0.2 }, "-=0.35")
    .from(".media__list", { opacity: 0, y: 10, duration: 0.65 });

  let footeTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".footer",
      start: "20% 85%",
      scroller: pageContainer,
      endTrigger: ".footer",
      end: "bottom bottom",
      scrub: true,
    }
  });
  footeTl.from(".footer__contacts", { opacity: 0, y: 10, duration: 0.65 })
    .from(".footer__nav", { opacity: 0, y: 10, duration: 0.65 }, "-=0.65")
    .from(".footer__bottom-btn", { opacity: 0, y: 30, duration: 0.65 }, "+=0.8")
    .from(".footer__bottom-descr", { opacity: 0, y: 30, duration: 0.65 }, "-=0.8");

  let headAnim = gsap.timeline({ delay: 0.7 });
  headAnim.fromTo(".header__background", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1.3, ease: "power3.inOut" })
    .from(".header__logo", { opacity: 0, duration: 0.6, ease: "power1.out" })
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
ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

function stopOverscroll(element) {
  element = gsap.utils.toArray(element)[0] || window;
  (element === document.body || element === document.documentElement) && (element = window);
  let lastScroll = 0,
    lastTouch, forcing,
    forward = true,
    isRoot = element === window,
    scroller = isRoot ? document.scrollingElement : element,
    ua = window.navigator.userAgent + "",
    getMax = isRoot ? () => scroller.scrollHeight - window.innerHeight : () => scroller.scrollHeight - scroller.clientHeight,
    addListener = (type, func) => element.addEventListener(type, func, { passive: false }),
    revert = () => {
      scroller.style.overflowY = "auto";
      forcing = false;
    },
    kill = () => {
      forcing = true;
      scroller.style.overflowY = "hidden";
      (!forward && scroller.scrollTop < 1) ? (scroller.scrollTop = 1) : (scroller.scrollTop = getMax() - 1);
      setTimeout(revert, 1);
    },
    handleTouch = e => {
      let evt = e.changedTouches ? e.changedTouches[0] : e,
        forward = evt.pageY <= lastTouch;
      if (((!forward && scroller.scrollTop <= 1) || (forward && scroller.scrollTop >= getMax() - 1)) && e.type === "touchmove") {
        e.preventDefault();
      } else {
        lastTouch = evt.pageY;
      }
    },
    handleScroll = e => {
      if (!forcing) {
        let scrollTop = scroller.scrollTop;
        forward = scrollTop > lastScroll;
        if ((!forward && scrollTop < 1) || (forward && scrollTop >= getMax() - 1)) {
          e.preventDefault();
          kill();
        }
        lastScroll = scrollTop;
      }
    };
  if ("ontouchend" in document && !!ua.match(/Version\/[\d\.]+.*Safari/)) {
    addListener('scroll', handleScroll);
    addListener('touchstart', handleTouch);
    addListener('touchmove', handleTouch);
  }
  scroller.style.overscrollBehavior = "none";
};
stopOverscroll(document.querySelector(".header"));

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