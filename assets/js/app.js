mapboxgl.accessToken = 'pk.eyJ1IjoiY2tpbmd3ZWJkZXNpZ24iLCJhIjoiY2prbHpucXhjMDhiczN2dWtwa3p4ZG8xbiJ9.jBb3qjiqTSQI632gAwj-4Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-122.431297, 37.773972]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());