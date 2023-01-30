let swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper__icon-next',
    prevEl: '.swiper__icon-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});