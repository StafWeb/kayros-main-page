let pageContainer = document.querySelector(".scrolsmooth");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});
let pinBoxes = document.querySelectorAll(".pin-wrap > *");
let pinWrap = document.querySelector(".pin-wrap");
let pinWrapWidth = pinWrap.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;
let swiperBlock = document.querySelector(".swiper-wrapper");
let mySwiperBlock = gsap.to(".swiper-wrapper", {
  x: -horizontalScrollLength,
  ease: "none",
  scrollTrigger: {
    trigger: ".wear",
    start: 'bottom bottom',
    scroller: pageContainer,
    // end: () => swiperBlock.offsetWidth / 1,
    scrub: 1,
    pin: true,
    end: pinWrapWidth,
    onUpdate() {
      console.log("Update")
    }
  }
});

ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

ScrollTrigger.refresh();