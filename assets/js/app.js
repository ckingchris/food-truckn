mapboxgl.accessToken = 'pk.eyJ1IjoiY2tpbmd3ZWJkZXNpZ24iLCJhIjoiY2prbmtlMjFpMDRxbDN3czMwcmZwcHF1biJ9.gYOmrmg4Kw6H7I7rDWRIxA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
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
        coordinates: [-122.407, 37.788]
      },
      properties: {
        title: 'Mapbox',
        description: 'Union Square'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.389, 37.778]
      },
      properties: {
        title: 'Mapbox',
        description: 'AT&T Park'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.410, 37.806]
      },
      properties: {
        title: 'Mapbox',
        description: 'North Beach'
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
        description: 'San Francisco Center'
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