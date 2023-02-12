import Swiper, { Navigation } from "swiper";

(function () {
  const slider = new Swiper(".projects__slider", {
    // slidesPerView: 4,
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".projects__slider-btn--next",
      prevEl: ".projects__slider-btn--prev",
    },
  });
})();
