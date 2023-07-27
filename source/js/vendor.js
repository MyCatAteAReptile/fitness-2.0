// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const coachSlider = new Swiper('.coaches__slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // cssMode: true,
  // Navigation arrows
  // autoHeight: true,
  navigation: {
    nextEl: '.coaches__btn-next',
    prevEl: '.coaches__btn-prev',
  },
  slidesPerView: 4,
  spaceBetween: 40,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1220: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const testSlider = new Swiper('.test__slider__slider', {
  loop: false,
  watchOverflow: false,
  navigation: {
    nextEl: '.test__slider__btn-next',
    prevEl: '.test__slider__btn-prev',
  },
  slidesPerView: 4,
  spaceBetween: 40,
});
