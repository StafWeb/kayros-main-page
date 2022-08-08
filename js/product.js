
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
if (window.innerWidth > 1000){
  let headAnim = gsap.timeline({ delay: 0.5 });
  headAnim.from(".header__logo", { opacity: 0, duration: 0.6, ease: "power1.out" })
    .from(".header__item-img", { opacity: 0, rotate: -90, duration: 0.4, ease: "power1.out" }, "-=0.3")
    .from(".first-link", { opacity: 0, duration: 0.5, ease: "expo.out" }, "-=0.4")
    .from(".second-link", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.3")
    .from(".header__form", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
    .from(".header__user", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
    .from(".header__cart", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5")
    .from(".header__burger", { opacity: 0, x: -5, duration: 0.6, ease: "power1.out" }, "-=0.5");
  
  let options = {
    threshold: [0.4]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let swiperDescr = document.querySelectorAll('.cards__item');
  for (let des of swiperDescr) {
    observer.observe(des);
  };
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add("cards-item-anim");
      }
    });
  };
  let offerTl = gsap.timeline({
    ease: "power1.out",
    delay: 1.3,
  });
  offerTl.fromTo(".cards", { opacity: 0, y: 20, }, { opacity: 1, y: 0, duration: 1 });
  
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
  let observerInfoAnim = new IntersectionObserver(infoAnim, options);
  let infoTitles = document.querySelectorAll('.product__info > h2');
  let infoDescrs = document.querySelectorAll('.product__info > p');
  
  for (let infoTitle of infoTitles) {
    observerInfoAnim.observe(infoTitle);
  };
  for (let infoDescr of infoDescrs) {
    observerInfoAnim.observe(infoDescr);
  };
  function infoAnim(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add("cards-item-anim");
      }
    });
  };
};

ScrollTrigger.refresh();

let burger = document?.querySelector('[data-burger]');
let nav = document?.querySelector('[data-burger-menu]');
let burgerLog = document.querySelector('.burger__logo');
let navItems = nav?.querySelectorAll('.burger-menu__item');
let burgerInner = document.querySelector('[data-burger-inner]');
let stop1 = document.documentElement;
let body = document.body;
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

let footerBtn = document.querySelectorAll("[data-menu]");
footerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle('btn-mob_active');
    this.nextElementSibling.classList.toggle("footer__list_active");
  });
});
let burgerBtn = document.querySelectorAll(".inner-btn");
burgerBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('inner-btn_active');
    this.nextElementSibling.classList.toggle("burger__list_active");
  })
});

let filtersBtn = document.querySelectorAll(".filters__btn");
filtersBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle("filters__list_active");
    btn.classList.toggle("filters__btn_active");
  })
});

let sortBtn = document.querySelector(".cards__sort-btn");
let sortList = document.querySelector(".cards__sort-list");
let sort = document.querySelector(".cards__sort");
let sortItem = document.querySelectorAll(".cards__sort-item");
let sortInner = document.querySelectorAll(".cards__sort-inner");
// let sortRadio = sortInner.querySelector("input[name='sort']");
// console.log(sortRadio);
window.onload = () => {
  setTimeout(() => {
      let a = document.querySelector(".cards__sort-inner > input[checked]");
      let b = a.parentNode;
      sortBtn.textContent = b.textContent;
  }, 200);
};
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
let filter = document.querySelector(".filters");
let filterBtn = document.querySelector(".filter-btn");
let filterShow = document.querySelector(".filters__btn-show");
let filterClose = document.querySelector(".filters__btn-close");
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
    el.parentNode.remove();
  });
});


