gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 950) {
  gsap.utils.toArray('.panel').forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: ".collection",
      start: "bottom bottom",
      pin: true,
      fastScrollEnd: 3000,
      pinSpacing: false,
      scrub: 3,
      snap: 2,
    });
    ScrollTrigger.create({
      trigger: ".wear",
      start: "center center",
      pin: true,
      pinSpacing: false,
      scrub: 3,
      snap: 2,
    });
  });
  let swiper = new Swiper('.swiper', {
    direction: "horizontal",
    speed: 1300,
    slidesPerGroup: 2,
    slidesPerView: "auto",
    effect: "slide",
    passiveListeners: true,
    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 1.3,
      // thresholdTime: 100,
      // thresholdDelta: 0.3,
    }
  });
}






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


burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  scrollMain.classList.toggle('stop-scroll');
  burger.classList.toggle('burger_active');
  nav.classList.toggle('burger-menu_active');
  burgerLog.classList.toggle('burger__logo_active');
});

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


// ScrollTrigger.normalizeScroll({
//   type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
//   momentum: self => Math.min(3, self.velocityY / 1000) // dynamically control the duration of the momentum when flick-scrolling
//  });

// (function() {

//   function scrollHorizontally(e) {

//     var scrollPos = this.scrollLeft;  // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)

//     // Горизонтальная прокрутка
//     e = window.event || e;
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     this.scrollLeft -= (delta*10); // Multiplied by 10

//     var widthElem = this.scrollWidth; // Ширина всего элемента
//     var widthBrowser = document.documentElement.clientWidth;  // Ширина окна минус размер вертикального скролла


//     // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх
//     if ((delta == 1 ) && (this.scrollLeft == 0)) return;
//     // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край
//     if ((widthBrowser >= widthElem) || (scrollPos == this.scrollLeft)) return;

//     e.preventDefault(); // запрещает прокрутку по вертикали

//   }


//   var elems = document.querySelectorAll('.swiper-wrapper');
//   for (var a = 0; a < elems.length; a++) {
//     elems[a].addEventListener("mousewheel", scrollHorizontally, false);     // IE9, Chrome, Safari, Opera
//     elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
//   }

// })();
