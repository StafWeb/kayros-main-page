import { burger, footerMenu, burgerMenu, catalogLink } from './commponents/menu.js';
import { loginModal } from './commponents/modal.js'
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
if (window.innerWidth > 1000) {
  let headAnim = gsap.timeline({ delay: 0.2, ease: "power1.out" });
  headAnim.from(".header__logo", { opacity: 0, duration: 0.6 })
    .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4 }, "-=0.4")
    .from(".item1", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".items", { opacity: 0, x: -5, duration: 0.6 }, "-=0.4")
    .from(".header__form", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6 }, "-=0.5")
    .fromTo(".cards", { opacity: 0, y: 20, }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
  let cardItem = document.querySelectorAll('.cards__item');
  for (let a = 0; a < cardItem.length; a++) {
    let trig = cardItem[a];
    gsap.from(trig, {
      opacity: 0,
      y: 20,
      duration: 1.5,
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
    .fromTo(".footer__bottom-btn", { y: 10, opacity: 0 }, { y:0, opacity:1, duration: 0.4 }, "+=0.2")
    .from(".footer__bottom-descr", { opacity: 0, y: 10, duration: 0.4 });

  let infoTitles = document.querySelectorAll('.product__info > h2, p');
  for (let a = 0; a < infoTitles.length; a++) {
    let trig = infoTitles[a];
    gsap.from(trig, {
      opacity: 0,
      y: 20,
      duration: 1.5,
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
  sortBtn = document.querySelector(".cards__sort-btn"),
  sortList = document.querySelector(".cards__sort-list"),
  sort = document.querySelector(".cards__sort"),
  sortItem = document.querySelectorAll(".cards__sort-item"),
  sortInner = document.querySelectorAll(".cards__sort-inner"),
  a = document.querySelector(".cards__sort-inner > input[checked]"),
  body = document.body,
  stop1 = document.documentElement,
  b = a.parentNode;
sortBtn.textContent = b.textContent;
sortBtn.addEventListener('click', () => {
  sortList.classList.add("cards__sort-list_active");
});
body.addEventListener("click", function () {
  sortList.classList.remove("cards__sort-list_active");
});
sort.addEventListener("click", function (evt) {
  evt.stopPropagation();
});
sortItem.forEach(function (btn) {
  btn.addEventListener("click", function () {
    sortList.classList.remove('cards__sort-list_active');
  });
});
sortInner.forEach(el => {
  el.addEventListener('click', () => {
    sortBtn.textContent = el.textContent;
  })
});

let
  filter = document.querySelector(".filters"),
  filterBtn = document.querySelector(".filter-btn"),
  filterShow = document.querySelector(".filters__btn-show"),
  filterClose = document.querySelector(".filters__btn-close");
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

let cardsBreadcumbsBtn = document.querySelectorAll(".cards__breadcrumbs-btn");
cardsBreadcumbsBtn.forEach(el => {
  el.addEventListener('click', () => {
    el.remove();
  });
});
if (window.innerWidth <= 1000) {
  document.querySelectorAll(".burger-menu__wrapper").forEach(el => {
    new SimpleBar(el);
  });
};


