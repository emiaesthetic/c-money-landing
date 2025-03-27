import 'virtual:svg-icons-register';
import 'swiper/css';

import initMap from '@/components/map';
import initSwiper from '@/components/swiper';
import initTabs from '@/components/tabs';

import '@/assets/scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSwiper();
  initMap();
});
