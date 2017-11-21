var map;
var markers = [];
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

    var highlightedIcon = makeMarkerIcon('FFFF24');
    var defaultIcon = makeMarkerIcon('0091ff')


// Initialize an array of markers
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: locations[i].location,
            title: locations[i].title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
        });
        markers.push(marker);
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow)
        });
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedIcon);
        })
        marker.addListener('mouseout', function () {
            this.setIcon(defaultIcon);
        })
        bounds.extend(marker.position);
    }
    map.fitBounds(bounds);
    document.getElementById('hide-listings').addEventListener('click', hideListings);
    document.getElementById('show-listings').addEventListener('click', showListings);
}


function populateInfoWindow(marker, infowindow){
    // Check to see if the infowindow is not opened
    if(infowindow.marker !=marker){
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        infowindow.addListener('closeclick', function(){
            infowindow.marker = null;
        });
    }
}

function showListings(){
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++){
        markers[i].setMap(map);
        // Update the boundary of the map according to the markers' locations
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

}

function hideListings() {
    for (var i = 0; i< markers.length; i++){
        // Hide all the markers
        markers[i].setMap(null);
    }
}

function makeMarkerIcon(markerColor){
    var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
    return markerImage;
}