mapboxgl.accessToken = 'pk.eyJ1IjoiY2tpbmd3ZWJkZXNpZ24iLCJhIjoiY2prbms4bnFmMWJ6aTNxcGNzcHpvcHpscSJ9.YGJzT7y4Hlvp39wj56WqZQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-122.431297, 37.773972]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl()); 

// GEOJSON
var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }]
};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});