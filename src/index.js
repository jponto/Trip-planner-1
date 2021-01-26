import mapboxgl from 'mapbox-gl';
import markerGenerator from './marker';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhd25qciIsImEiOiJja2tlN3VxNXAweXd3Mm9wYmlqeTNpa2prIn0.MHDNqwqGwi_jbD055z8_lw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available
});

const marker = markerGenerator('hotel', [-74.009, 40.705]);

marker.addTo(map);
