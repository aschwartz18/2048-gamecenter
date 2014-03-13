myLat = 0;
myLng = 0;
var request = new XMLHttpRequest();
var me;
var myOptions = {zoom: 13, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
var marker;
var infowindow;

function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	console.log("testing one");
	infowindow = new google.maps.InfoWindow();
	getMyLocation();
}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            me = new google.maps.LatLng(myLat, myLng);
            console.log(myLat + myLng);
            renderMap();
        });
    }
    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}

function renderMap() {
	me = new google.maps.LatLng(myLat, myLng);
	map.panTo(me);
	marker = new google.maps.Marker({position: me, title: "I am here at " + myLat + ", " + myLng + ""});
	marker.setMap(map);
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
}


