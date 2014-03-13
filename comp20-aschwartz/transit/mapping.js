var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {zoom: 13, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var markers = [];
var rodeoData;
			
function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}
			
function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
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
	marker = new google.maps.Marker({
	position: me,
	title: "I am here at " + myLat + ", " + myLng + ""});
	marker.setMap(map);
	google.maps.event.addListener(marker, 'click', function() {infowindow.setContent(marker.title); infowindow.open(map, marker);});
}

function loadRodeo() {
	var request = new XMLHttpRequest();
	var data_file = "http://mbtamap.herokuapp.com/mapper/rodeo.json";
 	if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } 
    else { 
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function(){
     	if (request.readyState == 4 && request.status == 200) {
            rodeoData = JSON.parse(request.responseText);
            mapStations(rodeoData);
        }
    }
    request.open("GET", data_file, true);
    request.send();
}




