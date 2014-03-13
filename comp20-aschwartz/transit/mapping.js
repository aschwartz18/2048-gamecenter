var request = new XMLHttpRequest();
var infowindow = new google.maps.InfoWindow();
myLat = 0;
myLng = 0;
var me;
var myOptions = {zoom: 13, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
var marker;


function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            me = new google.maps.LatLng(myLat, myLng);
            console.log(myLat + "," + myLng);
            parse();
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

function parse(){
	var line = JSON.parse('line');
	console.log(line);
}












