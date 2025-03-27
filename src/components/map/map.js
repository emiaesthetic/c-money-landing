import { debounce, loadMapScript } from './utils';

import marker from '/src/assets/icons/marker.svg';

const BREAKPOINT = 576;
const MOBILE_SIZE = [25, 35];
const DESKTOP_SIZE = [32, 44];
const MOBILE_OFFSET = [-10, -40];
const DESKTOP_OFFSET = [-12, -47];

const getMarkerOptions = () => {
  const isMobile = window.innerWidth <= BREAKPOINT;
  return {
    iconImageSize: isMobile ? MOBILE_SIZE : DESKTOP_SIZE,
    iconImageOffset: isMobile ? MOBILE_OFFSET : DESKTOP_OFFSET,
  };
};

const handleResize = placemark => {
  const newOptions = getMarkerOptions();
  const currentOptions = placemark.options.get(
    'iconImageSize',
    'iconImageOffset',
  );

  if (
    currentOptions.iconImageSize !== newOptions.iconImageSize ||
    currentOptions.iconImageOffset !== newOptions.iconImageOffset
  ) {
    placemark.options.set(newOptions);
  }
};

const removeMapControls = map => {
  const controlsToRemove = [
    'geolocationControl',
    'searchControl',
    'trafficControl',
    'typeSelector',
    'fullscreenControl',
    'zoomControl',
    'rulerControl',
  ];

  controlsToRemove.forEach(control => map.controls.remove(control));
  map.behaviors.disable(['scrollZoom']);
};

const setupMap = () => {
  const center = [55.79057, 37.590964];

  /* eslint-disable no-undef */
  ymaps.ready(() => {
    const map = new ymaps.Map('map', {
      center: center,
      zoom: 17,
    });

    const placemark = new ymaps.Placemark(
      center,
      {
        hintContent: 'Наш офис',
        balloonContent: `
          <div>
            <h3>Офис компании</h3>
            <p>Адрес: г. Москва, ул. Новослободская, 120/2 54</p>
          </div>
        `,
      },
      {
        iconLayout: 'default#image',
        iconImageHref: marker,
        ...getMarkerOptions(),
      },
    );

    removeMapControls(map);
    map.geoObjects.add(placemark);

    window.addEventListener('resize', debounce(handleResize, 100));
  });
  /* eslint-enable no-undef */
};

export const initMap = () => {
  const mapElement = document.querySelector('#map');

  if (!mapElement) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadMapScript(setupMap);
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '200px',
      threshold: 0.1,
    },
  );

  observer.observe(mapElement);
};
