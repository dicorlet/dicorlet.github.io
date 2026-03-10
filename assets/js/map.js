function initMap(center, zoom, geojson) {
  const map = L.map('project-map').setView(center, zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  if (geojson) {
    L.geoJSON(geojson, {
      style: {
        color: '#5c7a3e',
        weight: 2,
        fillColor: '#8aab5a',
        fillOpacity: 0.3
      }
    }).addTo(map);
  }
}
