import 'virtual:svg-icons-register';
import 'swiper/css';

import initMap from '@/components/map';
import initModal from '@/components/modal';
import initSwiper from '@/components/swiper';
import initTabs from '@/components/tabs';

import '@/assets/scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initTabs();
  initSwiper();
  initMap();
});
