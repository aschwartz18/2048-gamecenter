var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {zoom: 11, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
var tstop;
var infowindow = new google.maps.InfoWindow();
var markers = [];
var rodeoData;
var lineCoordinates = [];
var numStations = 0;
var parsed;
			
function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
	loadRodeo();
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
	marker = new google.maps.Marker({position: me, title: "I am here at " + myLat + ", " + myLng + ""});
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
            displayLine();
        }
    }
    request.open("GET", data_file, true);
    request.send();
}

function displayLine () {
	var marker = "marker.png";
    orange = '[{"id":"Oak Grove", "lat":42.43668, "lng":-71.071097},{"id":"Malden Center", "lat":42.426632, "lng":-71.07411},{"id":"Wellington", "lat":42.40237, "lng":-71.077082},{"id":"Sullivan", "lat":42.383975, "lng":-71.076994},{"id":"Community College", "lat":42.373622, "lng":-71.069533},{"id":"North Station", "lat":42.365577, "lng":-71.06129},{"id":"Haymarket", "lat":42.363021, "lng":-71.05829},{"id":"State Street", "lat":42.358978, "lng":-71.057598},{"id":"Downtown Crossing", "lat":42.355518, "lng":-71.060225},{"id":"Chinatown", "lat":42.352547, "lng":-71.062752},{"id":"Tufts Medical", "lat":42.349662, "lng":-71.063917},{"id":"Back Bay", "lat":42.34735, "lng":-71.075727},{"id":"Mass Ave", "lat":42.341512, "lng":-71.083423},{"id":"Ruggles", "lat":42.336377, "lng":-71.088961},{"id":"Roxbury Crossing", "lat":42.331397, "lng":-71.095451},{"id":"Jackson Square", "lat":42.323132, "lng":-71.099592},{"id":"Stony Brook", "lat":42.317062, "lng":-71.104248},{"id":"Green Street", "lat":42.310525, "lng":-71.107414},{"id":"Forest Hills", "lat":42.300523, "lng":-71.113686}]';
    red = '[{"id":"Alewife", "lat":42.395428, "lng":-71.142483},{"id":"Davis", "lat":42.39674, "lng":-71.121815},{"id":"Porter Square", "lat":42.3884, "lng":-71.119149},{"id":"Harvard Square", "lat":42.373362, "lng":-71.118956},{"id":"Central Square", "lat":42.365486, "lng":-71.103802},{"id":"Kendall/MIT", "lat":42.36249079, "lng":-71.08617653},{"id":"Charles/MGH", "lat":42.361166, "lng":-71.070628},{"id":"Park Street", "lat":42.35639457, "lng":-71.0624242},{"id":"Downtown Crossing", "lat":42.355518, "lng":-71.060225},{"id":"South Station", "lat":42.352271, "lng":-71.055242},{"id":"Broadway", "lat":42.342622, "lng":-71.056967},{"id":"Andrew", "lat":42.330154, "lng":-71.057655},{"id":"JFK/UMass", "lat":42.320685, "lng":-71.052391},{"id":"North Quincy", "lat":42.275275, "lng":-71.029583},{"id":"Wollaston", "lat":42.2665139, "lng":-71.0203369},{"id":"Quincy Center", "lat":42.251809, "lng":-71.005409},{"id":"Quincy Adams", "lat":42.233391, "lng":-71.007153},{"id":"Braintree", "lat":42.2078543, "lng":-71.0011385},{"id":"Savin Hill", "lat":42.31129, "lng":-71.053331},{"id":"Fields Corner", "lat":42.300093, "lng":-71.061667},{"id":"Shawmut", "lat":42.29312583, "lng":-71.06573796},{"id":"Ashmont", "lat":42.284652, "lng":-71.064489}]';
    blue = '[{"id":"Bowdoin", "lat":42.361365, "lng":-71.062037},{"id":"Government Center", "lat":42.359705, "lng":-71.059215},{"id":"State Street", "lat":42.358978, "lng":-71.057598},{"id":"Aquarium", "lat":42.359784, "lng":-71.051652},{"id":"Maverick", "lat":42.36911856, "lng":-71.03952958},{"id":"Airport", "lat":42.374262, "lng":-71.030395},{"id":"Wood Island", "lat":42.3796403, "lng":-71.02286539},{"id":"Orient Heights", "lat":42.386867, "lng":-71.004736},{"id":"Suffolk Downs", "lat":42.39050067, "lng":-70.99712259},{"id":"Beachmont", "lat":42.39754234, "lng":-70.99231944},{"id":"Revere Beach", "lat":42.40784254, "lng":-70.99253321},{"id":"Wonderland", "lat":42.41342, "lng":-70.991648}]';

    if (rodeoData['line'] == "orange") {
    	numStations = 19;
		for (i = 0; i < numStations; i++) {
			parsed = JSON.parse(orange);
			pt = new google.maps.LatLng(parsed[i]['lat'], parsed[i]['lng']);
			lineCoordinates.push(pt);
			tstop = new google.maps.Marker({position: pt, title: parsed[i]['id'], icon: marker});
			tstop.setMap(map);
			google.maps.event.addListener(tstop, 'click', function() {infowindow.setContent(tstop.title); infowindow.open(map, tstop);});
		}
		var orangePath = new google.maps.Polyline({path: lineCoordinates, geodesic: true, strokeColor: '#FFA500', strokeOpacity: 1.0, strokeWeight: 4});
        orangePath.setMap(map);
	}

   else if (rodeoData['line'] == "red") {
   		numStations = 22;
		for (i = 0; i < numStations; i++) {
			parsed = JSON.parse(red);
			pt = new google.maps.LatLng(parsed[i]['lat'], parsed[i]['lng']);
			lineCoordinates.push(pt);
			tstop = new google.maps.Marker({position: pt, title: parsed[i]['id'], icon: marker});
			tstop.setMap(map);
			google.maps.event.addListener(tstop, 'click', function() {infowindow.setContent(tstop.title); infowindow.open(map, tstop);});
		}
		var redPath = new google.maps.Polyline({path: lineCoordinates, geodesic: true, strokeColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 4});
        redPath.setMap(map);
	}

    else if (rodeoData['line'] == "blue") {
    	numStations = 12;
		for (i = 0; i < numStations; i++) {
			parsed = JSON.parse(blue);
			pt = new google.maps.LatLng(parsed[i]['lat'], parsed[i]['lng']);
			lineCoordinates.push(pt);
			tstop = new google.maps.Marker({position: pt, title: parsed[i]['id'], icon: marker});
			tstop.setMap(map);
			google.maps.event.addListener(tstop, 'click', function() {infowindow.setContent(tstop.title); infowindow.open(map, tstop);});
		}
		var bluePath = new google.maps.Polyline({path: lineCoordinates, geodesic: true, strokeColor: '#0000FF', strokeOpacity: 1.0, strokeWeight: 4});
        bluePath.setMap(map);
	}

	else {
		console.log("Error! Bad data");
		numStations = 0;
	}
	findClosest();
}

function findClosest() {
	var closestID = "There is no nearby T stop";
	var closestDistance = 9999;
	var R = 6371;
	for (i = 0; i < numStations; i++) {
		var dLat = toRad(parsed[i]['lat']-myLat);
		var dLng = toRad(parsed[i]['lng']-myLng);
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(toRad(myLat)) * Math.cos(toRad(parsed[i]['lat'])) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
		var c = R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))); 
		if (c < closestDistance) {
			closestDistance = c;
			closestID = parsed[i]['id'];
		}
	}
	console.log("The closest T station is " + closestID);
}


function toRad(x) {
	return x * Math.PI / 180;
}

