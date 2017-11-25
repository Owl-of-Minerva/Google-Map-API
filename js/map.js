var map;
var markers = [];
var placeMarkers = [];
var polygon = null;
var directionsDisplay = null;
var largeInfoWindow = null;
    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13,
        mapTypeControlOptions: {
            mapTypeIds:[
                'roadmap',
                'satellite',
                'hybrid',
                'terrain',
                'light_map',
                'shade_map'
            ]
        }
    });

// Resources found at https://snazzymaps.com/style/151/ultra-light-with-labels
    var lightMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
            ],
        {name: 'Light Map'}
    );

// Resources found at https://snazzymaps.com/style/38/shades-of-grey
    var shadeMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ],
        {name: 'Shade Map'}
    );

    map.mapTypes.set('light_map', lightMapType);
    map.mapTypes.set('shade_map', shadeMapType);
    map.setMapTypeId('roadmap');

    //Add auto complete feature when entering address
    var timeAutoComplete = new google.maps.places.Autocomplete(document.getElementById('search-within-time-text'));
    var zoomAutoCompete = new google.maps.places.Autocomplete(document.getElementById('zoom-to-area-text'));
    zoomAutoCompete.bindTo('bounds', map);

    var searchBox = new google.maps.places.SearchBox(document.getElementById('places-search'));
    searchBox.setBounds(map.getBounds());

    // event triggered when users selects a prediction from the list
    searchBox.addListener('places_changed', function(){
        searchBoxPlaces(this);
    });

    document.getElementById('go-places').addEventListener('click', textSearchPlaces);


    // a list of marker locations
    var locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];

    largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    var highlightedIcon = makeMarkerIcon('FFFF24');
    var defaultIcon = makeMarkerIcon('0091ff')

    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
            drawingModes: [
                google.maps.drawing.OverlayType.POLYGON
            ]
        }
    })


// Initialize an array of markers
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            //map: map,
            position: locations[i].location,
            title: locations[i].title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
        });
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow)
        });
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
        markers.push(marker);
        bounds.extend(marker.position);
    }
    map.fitBounds(bounds);
    document.getElementById('hide-listings').addEventListener('click', function(){
        hideListings(markers);
    });
    document.getElementById('show-listings').addEventListener('click', showListings);

    document.getElementById('toggle-drawing').addEventListener('click', function () {
        toggleDrawing(drawingManager);
    });
    document.getElementById('zoom-to-area').addEventListener('click', zoomToArea);
    document.getElementById('search-within-time').addEventListener('click', searchWithinTime);
    document.getElementById('clear-route').addEventListener('click', clearRoute);
    // Event listener when the polygon is completed
    drawingManager.addListener('overlaycomplete', function(event){
        // Get rid of existing polygon if there is any
        if (polygon){
            polygon.setMap(null);
            hideListings(markers);
        }
        //set drawing mode to no longer drawing
        drawingManager.setDrawingMode(null);

        polygon = event.overlay;
        polygon.setEditable(true);
        searchWithinPolygon();
        polygon.getPath().addListener('set_at', searchWithinPolygon);
        polygon.getPath().addListener('insert_at', searchWithinPolygon);
        //console.log(google.maps.geometry.spherical.computeArea(polygon.getPath()));

    });

}


function populateInfoWindow(marker, infowindow){
    // Check to see if the infowindow is not opened
    if(infowindow.marker != marker){
        infowindow.marker = marker;
        infowindow.setContent('');
        infowindow.addListener('closeclick', function(){
            infowindow.marker = null;
        });
        var streetViewService = new google.maps.StreetViewService();
        var radius = 50;

        function getStreetView(data, status){
            if(status == google.maps.StreetViewStatus.OK) {
                var nearStreetViewLocation = data.location.latLng;
                var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div> <div id="pano"></div>');
                var panoramaOptions = {
                    position: nearStreetViewLocation,
                    pov:{
                        heading: heading,
                        pitch: 30
                    }
                };
                var panoramo = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
            }
            else {
                infowindow.setContent('<div>' + marker.title + '</div> <div> Street View N/A </div>')
            }

        }

        // Get the closes street view image within specified radius range
        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        infowindow.open(map, marker);
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

function hideListings(markers) {
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

function toggleDrawing(drawingManager){
    if (drawingManager.map){
        drawingManager.setMap(null);
        if (polygon !== null) {
            polygon.setMap(null);
        }
    }
    else{
        drawingManager.setMap(map);
    }
}

// Only show markers within the search region
function searchWithinPolygon(){
    for (var i = 0; i < markers.length; i++){
        if (google.maps.geometry.poly.containsLocation(markers[i].position, polygon)){
            markers[i].setMap(map);
        }
        else{
            markers[i].setMap(null)
        }
    }
    document.getElementById('area').textContent = "You searched total area of "
        + Math.round(google.maps.geometry.spherical.computeArea(polygon.getPath())) + " square meters";
}

// Pinpoint to the sepcifi location and zoom the the area
function zoomToArea(){
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('zoom-to-area-text').value;
    if (address == ''){
        window.alert('Invalid empty input');
    }
    else{
        geocoder.geocode(
            {
                address: address,
                componentRestrictions: {locality: 'New York'}
            }, function(results, status){
                if (status == google.maps.GeocoderStatus.OK){
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(15);
                }
                else{
                    window.alert('Location not found');
                }
            }
        )
    }
}

function searchWithinTime() {
    var distanceMatrixService = new google.maps.DistanceMatrixService;
    var address = document.getElementById('search-within-time-text').value;

    if (address == '') {
        window.alert('Invalid empty input');
    } else {
        hideListings(markers);
        var origins = [];
        for (var i = 0; i < markers.length; i++) {
            origins[i] = markers[i].position;
        }
        var destination = address;
        var mode = document.getElementById('mode').value;
        distanceMatrixService.getDistanceMatrix({
            origins: origins,
            destinations: [destination],
            travelMode: google.maps.TravelMode[mode],
            unitSystem: google.maps.UnitSystem.IMPERIAL,
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                window.alert('Error was: ' + status);
            } else {
                displayMarkersWithinTime(response);
            }
        });
    }
}

function displayMarkersWithinTime(response) {
    var maxDuration = document.getElementById('max-duration').value;
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    var atLeastOne = false;
    for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
            var element = results[j];
            if (element.status === "OK") {
                var distanceText = element.distance.text;
                var duration = element.duration.value / 60;
                var durationText = element.duration.text;
                if (duration <= maxDuration) {
                    markers[i].setMap(map);
                    atLeastOne = true;
                    var infowindow = new google.maps.InfoWindow({
                        content: durationText + ' away, ' + distanceText +
                        '<div><input type=\"button\" value=\"View Route\" onclick =' +
                        '\"displayDirections(&quot;' + origins[i] + '&quot;);\"></input></div>'
                    });
                    infowindow.open(map, markers[i]);
                    markers[i].infowindow = infowindow;
                    google.maps.event.addListener(markers[i], 'click', function() {
                        this.infowindow.close();
                    });
                }
            }
        }
    }
    if (!atLeastOne) {
        window.alert('We could not find any locations within that distance!');
    }
}

function displayDirections(origin) {
    hideListings(markers);
    var directionsService = new google.maps.DirectionsService;
    var destinationAddress =
        document.getElementById('search-within-time-text').value;

    var mode = document.getElementById('mode').value;
    directionsService.route({
        origin: origin,
        destination: destinationAddress,
        travelMode: google.maps.TravelMode[mode]
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
             directionsDisplay = new google.maps.DirectionsRenderer({
                map: map,
                directions: response,
                draggable: true,
                polylineOptions: {
                    strokeColor: 'green'
                }
            });
             document.getElementById('clear-route').style.visibility = "visible";

        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function clearRoute(){
    directionsDisplay.setMap(null);
    document.getElementById('clear-route').style.visibility = "hidden";
}

function searchBoxPlaces(searchBox){
    hideListings(placeMarkers);
    var places = searchBox.getPlaces();
    createMarkersForPlaces(places);
    if (places.length == 0){
        window.alert("No place was found");
    }
}

function textSearchPlaces(){
    var bounds = map.getBounds();
    hideListings(placeMarkers);
    var placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch({
        query: document.getElementById('places-search').value,
        bounds: bounds
    }, function(results, status){
        if (status === google.maps.places.PlacesServiceStatus.OK){
            createMarkersForPlaces(results);
        }
    });
}

function createMarkersForPlaces(places){
    //console.log(places.length);
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++){
        var place = places[i];
        var icon = {
            url: place.icon,
            size: new google.maps.Size(35,35),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(15,34),
            scaledSize: new google.maps.Size(25,25)
        };
        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
            id: place.place_id
        });

        var placeInfoWindow = new google.maps.InfoWindow();
        marker.addListener('click', function(){
           if (placeInfoWindow.marker == this){
               window.alert('Info already displayed on the marker')
           }
           else{
               getPlaceDetails(this, placeInfoWindow);
           }
        })

        placeMarkers.push(marker);
        if(place.geometry.viewport){
            bounds.union(place.geometry.viewport);
        }
        else{
            bounds.extend(place.geometry.location);
        }



    }
    map.fitBounds(bounds);
}


function getPlaceDetails(marker, infowindow) {
    var service = new google.maps.places.PlacesService(map);
    service.getDetails({
        placeId: marker.id
    }, function(place, status){
        if (status === google.maps.places.PlacesServiceStatus.OK){
            infowindow.marker = marker;
        }
        var innerHTML = '<div>'
        if (place.name){
            innerHTML += '<strong>' + place.name + '</strong>';
        }
        if (place.formatted_address){
            innerHTML += '<br>' + place.formatted_address;
        }
        if(place.formatted_phone_number){
            innerHTML += '<br>' + place.formatted_phone_number;
        }
        if (place.opening_hours) {
            innerHTML += '<br><br><strong>Hours:</strong><br>' +
                place.opening_hours.weekday_text[0] + '<br>' +
                place.opening_hours.weekday_text[1] + '<br>' +
                place.opening_hours.weekday_text[2] + '<br>' +
                place.opening_hours.weekday_text[3] + '<br>' +
                place.opening_hours.weekday_text[4] + '<br>' +
                place.opening_hours.weekday_text[5] + '<br>' +
                place.opening_hours.weekday_text[6];
        }
        if (place.photos) {
            innerHTML += '<br><br><img src="' + place.photos[0].getUrl(
                {maxHeight: 100, maxWidth: 200}) + '">';
        }
        innerHTML += '</div>';
        infowindow.setContent(innerHTML);
        infowindow.open(map, marker);
        infowindow.addListener('closedclick', function(){
            infowindow.marker = null;
        });
    })
}