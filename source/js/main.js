import {iosVhFix} from './utils/ios-vh-fix';
//import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';

// ---------------------------------
const infoList = document.querySelector('.info-list');
const playGymVideoButton = document.querySelector('.gym__play-button');
const gymVideoCover = document.querySelector('.gym__video-cover');
const gymVideoFrame = document.querySelector('.gym__video-player iframe');
const subscriptionsControl = document.querySelector('.tabs__control');

if (window.matchMedia('(max-width: 767px)').matches && infoList !== null) {
  let rows = Math.ceil((infoList.children.length + 1) / 2);
  infoList.setAttribute('style', `grid-template-rows: repeat(${rows}, 1fr);`);
}

if (playGymVideoButton !== null && gymVideoCover !== null && gymVideoFrame !== null) {
  playGymVideoButton.addEventListener('click', () => {
    gymVideoCover.classList.add('visually-hidden');
    playGymVideoButton.classList.add('visually-hidden');
    gymVideoFrame.src += '?autoplay=1&mute=1';
  });
}

// if (subscriptionsTabs !== null) {
//   subscriptionsTabs.append(tabs);
// }

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // const form = new Form();
    // window.form = form;
    // form.init();
    initTabs();
    // subscriptionsControl.addEventListener('click', (e) => {
    //   e.target.openTab();
    // });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
