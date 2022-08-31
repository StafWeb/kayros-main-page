function burger() {
  let burger = document?.querySelector('[data-burger]'),
    nav = document?.querySelector('[data-burger-menu]'),
    burgerLog = document.querySelector('.burger__logo'),
    navItems = nav?.querySelectorAll('.burger-menu__item'),
    body = document.body,
    burgerBtn = document.querySelector('.burger-menu__btn'),
    stop1 = document.documentElement;
  burger.addEventListener('click', () => {
    stop1.classList.toggle('stop-scroll');
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger_active');
    nav.classList.toggle('burger-menu_active');
    burgerLog.classList.toggle('burger__logo_active');
    burgerBtn.classList.toggle('burger_active')
  });
  burgerBtn.addEventListener('click', () => {
    stop1.classList.remove('stop-scroll');
    body.classList.remove('stop-scroll');
    burgerBtn.classList.remove('burger_active')
    burger.classList.remove('burger_active');
    nav.classList.remove('burger-menu_active');
    burgerLog.classList.remove('burger__logo_active');
  })
  navItems.forEach(el => {
    el.addEventListener('click', () => {
      stop1.classList.remove('stop-scroll');
      body.classList.remove('stop-scroll');
      burgerBtn.classList.remove('burger_active')
      burger.classList.remove('burger_active');
      nav.classList.remove('burger-menu_active');
      burgerLog.classList.remove('burger__logo_active');
    });
  });
  document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if (keyCode === 'Escape') {
      stop1.classList.remove('stop-scroll');
      body.classList.remove('stop-scroll');
      burgerBtn.classList.remove('burger_active')
      burger.classList.remove('burger_active');
      nav.classList.remove('burger-menu_active');
      burgerLog.classList.remove('burger__logo_active');
    }
  });
};
function footerMenu() {
  let footerBtn = document.querySelectorAll("[data-menu]");
  footerBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle('btn-mob_active');
      this.nextElementSibling.classList.toggle("footer__list_active");
    });
  });
};
function burgerMenu() {
  let navBtn = document.querySelectorAll(".inner-btn");
  navBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('inner-btn_active');
      this.nextElementSibling.classList.toggle("burger__list_active");

    })
  });
};
function catalogLink() {
  let
    catalogLink = document.querySelector(".catalog-link"),
    dropdown = document.querySelector(".dropdown"),
    body = document.body,
    a = 0;
  catalogLink.addEventListener('click', (el) => {
    a++;
    el.stopPropagation();
    if (a <= 1) { el.preventDefault() };
  });
  dropdown.addEventListener('click', (el) => {
    el.stopPropagation();
  });
  body.addEventListener('click', () => {
    a = 0;
  });
};
export { burger, footerMenu, burgerMenu, catalogLink };

