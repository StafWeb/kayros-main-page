let options = {
  threshold: [0.3]
};
let coll = document.querySelector(".collection__title");
let observerHead = new IntersectionObserver(sec, options);
// observerHead.observe(headerLog);
// for (let i of headerItem) {
//   observerHead.observe(i);
// }
// observerHead.observe(searchForm);
// observerHead.observe(userCab);
// observerHead.observe(cart);
// observerHead.observe(burger);
observerHead.observe(coll);
function sec(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      sa.play();
    }
  });
};
