import marker from '@/assets/icons/marker.svg';

const getMarkerSize = () => {
  if (window.innerWidth <= 576) return [25, 35];
  return [32, 44];
};

const getMarkerOffset = () => {
  if (window.innerWidth <= 576) return [-10, -40];
  return [-12, -47];
};

export const initMap = () => {
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
        iconImageSize: getMarkerSize(),
        iconImageOffset: getMarkerOffset(),
      },
    );
    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    window.addEventListener('resize', () => {
      placemark.options.set({
        iconImageSize: getMarkerSize(),
        iconImageOffset: getMarkerOffset(),
      });
    });
  });
};
/* eslint-enable no-undef */
