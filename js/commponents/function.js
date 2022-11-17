function burgerScroll() {
  if (window.innerWidth <= 1000) {
    let burger1 = document.querySelector(".burger-menu__wrapper");
    new SimpleBar(burger1);
    console.log("1")
  } else {
    let burger2 = document.querySelector(".burger-menu");
    new SimpleBar(burger2);
    console.log('2')
  };
};

function windowResize() {
  let wW = window.innerWidth;
  window.addEventListener('resize', () => {
    let wW1 = window.innerWidth
    if (window.matchMedia("(min-width: 650px)").matches && window.matchMedia("(max-width: 1250px)").matches)  {
      if (wW1 >= wW * 1.2 || wW1 <= wW * 0.8)
      location.reload()
    }
  });

};

function sortList() {
  let
  sortBtn = document.querySelector(".cards__sort-btn"),
  sortList = document.querySelector(".cards__sort-list"),
  sort = document.querySelector(".cards__sort"),
  sortItem = document.querySelectorAll(".cards__sort-item"),
  sortInner = document.querySelectorAll(".cards__sort-inner"),
  a = document.querySelector(".cards__sort-inner > input[checked]"),
  body = document.body,
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
}

async function preloader() {
  let
    preloader = document.querySelector(".preloader"),
    imgCount = document.querySelectorAll("img").length,
    prelInner = document.querySelector(".preloader__inner"),
    counter = document.querySelector(".preloader__count"),
    percent = 100 / imgCount,
    count = 0,
    imgload = 0;
  for (let i = 0; i < imgCount; i++) {
    let imgCopy = new Image();
    imgCopy.src = document.images[i].src;
    imgCopy.onload = prel;
    imgCopy.onerror = prel;
  }
  function prel() {
    let a = (count += percent).toFixed();
    let c = imgload++;
    counter.textContent = a;
    prelInner.style.width = `${a}` + '%';
    if (a >= 99 || c == imgCount) {
      preloader.classList.add('preloader_hide');
    }
  };
};

export { burgerScroll, windowResize, preloader, sortList }
