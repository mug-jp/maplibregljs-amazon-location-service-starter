import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

const region = import.meta.env.VITE_REGION;
const mapApiKey = import.meta.env.VITE_MAP_API_KEY;
const mapStyle = import.meta.env.VITE_MAP_STYLE;

const map = new maplibregl.Map({
    container: 'map',
    style: `https://maps.geo.${region}.amazonaws.com/v2/styles/${mapStyle}/descriptor?key=${mapApiKey}`,
    center: [139.767, 35.681],
    zoom: 11,
});

map.addControl(
    new maplibregl.NavigationControl({
        visualizePitch: true,
    })
);
