import {headerAnim} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  let preloader = document.querySelector(".preloader");
  let imgCount = document.querySelectorAll("img").length;
  let prelInner = document.querySelector(".preloader__inner");
  let counter = document.querySelector(".preloader__count");
  let percent = 100 / imgCount;
  let count = 0;
    for(let i = 0; i < imgCount; i++){
      let imgCopy = new Image();
      imgCopy.src = document.images[i].src;
      imgCopy.onload = prel;
      imgCopy.onerror = prel;
    }
    function prel (){
      let a = (count += percent).toFixed()
      counter.textContent = a;
      prelInner.style.width = `${a}` + '%';
      if(a >= 100){
        preloader.classList.add('preloader--hide');
       if(window.innerWidth >= 1000){
        headerAnim();
       }
      }
    }
});
