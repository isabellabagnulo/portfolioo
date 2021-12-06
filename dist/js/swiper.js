import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js"

function swiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    calculateHeight: true,

    pagination: {
      clickable: true,
      dynamicBullets: true,
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  })
}

export { swiper }
