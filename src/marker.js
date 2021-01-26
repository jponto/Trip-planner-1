import mapboxgl from 'mapbox-gl';

const icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)',
};
const markerGenerator = (type, location) => {
  const marker = document.createElement('img');
  marker.style.width = '32px';
  marker.style.height = '39px';
  marker.src = icons[type];
  marker.style.borderRadius = '50%';

  return new mapboxgl.Marker(marker).setLngLat(location);
};

export default markerGenerator;
