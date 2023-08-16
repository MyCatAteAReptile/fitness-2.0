// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const coachSlider = new Swiper('.coaches__slider', {
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
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

export const feedbackSlider = new Swiper('.feedback__slider', {
  loop: false,
  watchOverflow: false,
  navigation: {
    nextEl: '.feedback__btn-next',
    prevEl: '.feedback__btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: 80,
});
