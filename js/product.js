import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js';
import { loginModal } from './commponents/modal.js'
import { burgerScroll, toggleSort, windowResize, isCookie } from './commponents/function.js'

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // toggleActions: "restart complete reverse reset",
  toggleActions: "play none none none",
  // markers: {
  //   startColor: "green",
  //   endColor: "red",
  //   fontSize: "26px",
  // },
});
let headAnim = gsap.timeline({ ease: "power1.out" });
  headAnim.to(".anim", { opacity: 1, duration: 0.2 })
if (window.matchMedia("(min-width: 1001px)").matches) {
  headAnim.from(".breadcrumbs", { opacity: 0, duration: 0.6 })
    .from(".product__title", { opacity: 0, duration: 0.6 }, "-=0.5")
    .from(".cards__top", { opacity: 0, duration: 0.6 }, "-=0.6")
    .from(".cards__list", { opacity: 0, y: 5, duration: 1 }, "-=0.6")
    .from(".filters", { opacity: 0, duration: 1 }, "-=0.8")
    .from(".header__logo", { opacity: 0, duration: 0.6 }, "-=0.9")
    .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4 }, "-=0.5")
    .from(".item1", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".items", { opacity: 0, x: -5, duration: 0.6 }, "-=0.4")
    .from(".header__end-anim", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6 }, "-=0.55")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6 }, "-=0.55")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6 }, "-=0.55");
  let cardItem = document.querySelectorAll('.cards__item');
  for (let a = 0; a < cardItem.length; a++) {
    let trig = cardItem[a];
    gsap.from(trig, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trig,
        start: "28% 90%",
      }
    });
  };
  let footeTl = gsap.timeline({
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "20% 85%",
      toggleActions: "play none none none",
      scrub: false,
    }
  });
  footeTl.from(".footer__contacts", { opacity: 0, y: 10, duration: 0.65 })
    .from(".footer__nav", { opacity: 0, y: 10, duration: 0.65 }, "-=0.65")
    .fromTo(".footer__bottom-btn", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
    .from(".footer__bottom-descr", { opacity: 0, y: 10, duration: 0.4 });

  let infoTitles = document.querySelectorAll('.product__info > h2, p');
  for (let a = 0; a < infoTitles.length; a++) {
    let trig = infoTitles[a];
    gsap.from(trig, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trig,
        start: "28% 90%",
      }
    });
  };
};

ScrollTrigger.refresh();

burger();
footerMenu();
burgerMenu();
loginModal();
catalogLink();
windowResize();
burgerScroll();
toggleSort();
isCookie();

document.querySelectorAll(".filters").forEach(el => {
  new SimpleBar(el);
});


let filtersBtn = document.querySelectorAll(".filters__btn");
filtersBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle("filters__list_active");
    btn.classList.toggle("filters__btn_active");
  })
});

let
  filter = document.querySelector(".filters"),
  filterBtn = document.querySelector(".filter-btn"),
  filterShow = document.querySelector(".filters__btn-show"),
  filterClose = document.querySelector(".filters__btn-close"),
  body = document.body,
  stop1 = document.documentElement;
filterBtn.addEventListener('click', function () {
  stop1.classList.add('stop-scroll');
  body.classList.add('stop-scroll');
  filter.classList.add("filters_active");

});
filterShow.addEventListener('click', function () {
  stop1.classList.remove('stop-scroll');
  body.classList.remove('stop-scroll');
  filter.classList.remove("filters_active");
});
filterClose.addEventListener('click', function () {
  stop1.classList.remove('stop-scroll');
  body.classList.remove('stop-scroll');
  filter.classList.remove("filters_active");
});

let cardsBreadcumbsBtn = document?.querySelectorAll(".cards__breadcrumbs-btn");
cardsBreadcumbsBtn.forEach(el => {
  el.addEventListener('click', () => {
    el.remove();
  });
});



