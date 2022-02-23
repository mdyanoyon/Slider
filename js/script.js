import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
var swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});