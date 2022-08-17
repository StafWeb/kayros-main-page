import { headerAnim } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  let preloader = document.querySelector(".preloader");
  let imgCount = document.querySelectorAll("img").length;
  let prelInner = document.querySelector(".preloader__inner");
  let counter = document.querySelector(".preloader__count");
  let percent = 100 / imgCount;
  let count = 0;
  let imgload = 0;
  for (let i = 0; i < imgCount; i++) {
    let imgCopy = new Image();
    imgCopy.src = document.images[i].src;
    imgCopy.onload = prel;
    imgCopy.onerror = prel;
  }
  function prel() {
    let a = (count += percent).toFixed()
    let c = imgload++;
    counter.textContent = a;
    prelInner.style.width = `${a}` + '%';
    window.onload = () => {
      setTimeout(() => {
        if (a >= 99 || c == imgCount) {
          preloader.classList.add('preloader_hide');
          if (window.innerWidth >= 1000) {
            headerAnim();
          }
        }
      }, 100);
      
    }
    
  }
});
