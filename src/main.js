import 'virtual:svg-icons-register';
import 'swiper/css';

import initTabs from '@/components/tabs';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

import '@/assets/scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();

  new Swiper('.swiper', {
    modules: [Keyboard, Navigation, Mousewheel],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
      576: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 23,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: -20,
        centeredSlides: false,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    mousewheel: {
      releaseOnEdges: true,
      invert: false,
    },
  });
});
