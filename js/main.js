import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js';
import { loginModal } from './commponents/modal.js';
import { windowResize, burgerScroll, preloader } from './commponents/function.js'

document.addEventListener('DOMContentLoaded', () => {
  async function start() {
    await preloader();
    if (window.innerWidth > 1000) {
      await headerAnim();
    }
  }
  start();
});

gsap.registerPlugin(ScrollTrigger);

async function headerAnim() {
  let headAnim = gsap.timeline({ delay: 0.3, ease: "power1.out" });
  headAnim.fromTo(".header__background", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1 })
    .from(".header__logo", { opacity: 0, duration: 0.6 })
    .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4 }, "-=0.4")
    .from(".item1", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".items", { opacity: 0, x: -5, duration: 0.6 }, "-=0.4")
    .from(".header__form", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__title", { opacity: 0, y: 40, duration: 0.6 }, "-=0.6")
    .from(".header__descr", { opacity: 0, y: 30, duration: 0.6 }, "-=0.5")
    .from(".header__thumb", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5");
};

burger();
burgerMenu();
footerMenu();
loginModal();
catalogLink();
windowResize();
burgerScroll();

let pageContainer = document.querySelector("#viewport");
/* SMOOTH SCROLL */
let scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  getSpeed: true,
  // reloadOnContextChange: true,
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
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  gsap.to(".gallery__wrapper", {
    x: - pinWrapWidth / 2,
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
      trigger: ".gallery__wrapper",
      start: "25% 85%",
      end: "bottom bottom",
      scrub: true,
    }
  });
  swiperAnim.from(".gallery__text-title", { opacity: 0, y: 30, duration: 0.6 })
    .from(".gallery__text-descr", { opacity: 0, y: 30, duration: 0.6 }, "-=0.5")
    .fromTo(".gallery__slide-img", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, stagger: 0.1 }, "-=0.5")
    .from(".gallery__slide-title", { opacity: 0, y: 10 });

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
      start: "top bottom",
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
    .from(".cards__item", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.8");

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
    .from(".footer__bottom-btn", { opacity: 0, y: 10, duration: 0.65 }, "+=1")
    .from(".footer__bottom-descr", { opacity: 0, y: 10, duration: 0.65 });
};

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();








