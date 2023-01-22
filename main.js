var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 2,

  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  //breakpoints: {
    //769: {
      //slidesPerView: 2,
      //slidesPerGroup: 2,
    //},
  //},
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper__top__next",
    prevEl: ".swiper__top__prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});