var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
    });


// a list of marker locations
    var locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];

    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    var markers = [];
// Initialize an array of markers
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: locations[i].location,
            title: locations[i].title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        markers.push(marker);
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow)
        });
        bounds.extend(marker.position)
    }
    map.fitBounds(bounds);
}