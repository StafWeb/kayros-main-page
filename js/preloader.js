import {headerAnim} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
//   let mediaFiles = document.querySelectorAll('img');
//   let i = 0;
//   Array.from(mediaFiles).forEach((file, index) => {
//       file.onload = () => {
//           let v = i++;
//          let a = percents.textContent = ((i * 100) / mediaFiles.length).toFixed();
//         // console.log(a)
//         // console.log(i++);
//         console.log(mediaFiles.length);
//         // console.log(v)
//         if (document.readyState == "complete"){
//           preloader.classList.add('preloader--hide')
//         }
//       };
//       file.onerror = () => {
//         console.log(file, index)
//       };
//   });
let mediaFiles = document.querySelectorAll('img');
let i = 0;
Array.from(mediaFiles).forEach((file, index) => {
  file.onload = () => {
    i++;
    // let count = ((i * 100) / mediaFiles.length).toFixed();
    let a = percents.textContent = ((i * 100) / mediaFiles.length).toFixed();
    console.log(a)
    window.onload = () => {
      // console.log(i);
      console.log(mediaFiles.length);
      setTimeout(() => {
         preloader.classList.add('preloader--hide');
         percents.textContent = '100';
        if (window.innerWidth > 1000) {
          console.log("message");
          return headerAnim();
        }
      }, 300);
    };

  };
  file.onerror = () => {
    console.log(file, index)
  };
});
});
