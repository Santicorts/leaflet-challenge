// Step 1: Define the URL for the earthquake data
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"; 

// Initialize the Leaflet map
var myMap = L.map('map').setView([37.7749, -122.4194], 5);

// Step 2: Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(myMap);

// Function to determine marker color based on depth
function getColor(depth) {
    return depth > 90 ? '#FF0000' :  // Deepest: red
           depth > 70 ? '#FF4500' :
           depth > 50 ? '#FF8C00' :
           depth > 30 ? '#FFD700' :
           depth > 10 ? '#ADFF2F' :  // Shallowest: green
                        '#7FFF00';
}

// Use D3 to load the data
d3.json(url).then(data => {
    console.log(data);

    // Bind data using D3 and create Leaflet circle markers
    d3.selectAll("circle")
        .data(data.features)
        .enter()
        .each(function(d) {
            const magnitude = d.properties.mag;
            const depth = d.geometry.coordinates[2]; // Depth is the third coordinate
            const latitude = d.geometry.coordinates[1];
            const longitude = d.geometry.coordinates[0];

            // Create a circle marker with size based on magnitude and color based on depth
            L.circleMarker([latitude, longitude], {
                radius: magnitude * 4,  // Adjust size for better visibility
                color: getColor(depth), // Set the color based on depth
                fillOpacity: 0.75
            }).addTo(myMap)
              .bindPopup(`<b>Place:</b> ${d.properties.place}<br>
                          <b>Magnitude:</b> ${magnitude}<br>
                          <b>Depth:</b> ${depth} km<br>
                          <b>Time:</b> ${new Date(d.properties.time)}`);
        });

}).catch(error => {
    console.error('Error:', error);
});
