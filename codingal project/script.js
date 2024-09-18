// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    initMap();

    // Add smooth scrolling for navigation links
    addSmoothScrolling();

    // Add hover effects for navigation items
    addNavHoverEffects();
});

function initMap() {
    // Initialize the map (you'll need to replace 'YOUR_API_KEY' in the HTML file)
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7749, lng: -122.4194}, // Example coordinates (San Francisco)
        zoom: 12
    });

    // Add markers for different project types
    addMarker(map, 37.7749, -122.4194, 'Sustainability', 'Solar Power Plant');
    addMarker(map, 37.7833, -122.4167, 'Transportation', 'Electric Vehicle Charging Station');
    addMarker(map, 37.7694, -122.4862, 'Technology', 'Smart Grid Control Center');
}

function addMarker(map, lat, lng, type, title) {
    const marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title
    });

    // You can customize the icon based on the type
    // marker.setIcon('path/to/custom-icon.png');

    const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${title}</h3><p>Type: ${type}</p>`
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function addNavHoverEffects() {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#34495e';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
}
