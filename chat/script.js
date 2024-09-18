// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 13); // Example coordinates (San Francisco)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Example marker
L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('Proposed Electric Vehicle Charging Station')
    .openPopup();

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const suggestion = e.target[0].value;

    fetch('/submit-suggestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suggestion }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Suggestion submitted!');
        e.target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
