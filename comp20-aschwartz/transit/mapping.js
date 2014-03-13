var infowindow = new google.maps.InfoWindow();
var map;
var markers[];
var me;
var meMarker;

function getMyLocation() {
	
}


function init() {

	centerMBTA = new google.maps.LatLng(42.330497742, -71.095794678);
	myOptions = {zoom: 11, center: centerMBTA, mapTypeId: google.maps.MapTypeId.ROADMAP};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	mark = "marker.png";

	pt = new google.maps.LatLng(42.395428, -71.142483);
	markers.push(new google.maps.Marker({position: pt, title: "Alewife", icon: mark}));

    pt = new google.maps.LatLng(42.330154, -71.057655);
	markers.push(new google.maps.Marker({position: pt, title: "Andrew", icon: mark}));

    pt = new google.maps.LatLng(42.284652, -71.064489);
	markers.push(new google.maps.Marker({position: pt, title: "Ashmont", icon: mark}));

    pt = new google.maps.LatLng(42.2078543, -71.0011385);
	markers.push(new google.maps.Marker({position: pt, title: "Braintree", icon: mark}));

    pt = new google.maps.LatLng(42.342622, -71.056967);
	markers.push(new google.maps.Marker({position: pt, title: "Broadway", icon: mark}));

    pt = new google.maps.LatLng(42.365486, -71.103802);
	markers.push(new google.maps.Marker({position: pt, title: "Central", icon: mark}));

    pt = new google.maps.LatLng(42.361166, -71.070628);
	markers.push(new google.maps.Marker({position: pt, title: "Charles MGH", icon: mark}));

    pt = new google.maps.LatLng(42.39674, -71.121815);
	markers.push(new google.maps.Marker({position: pt, title: "Davis", icon: mark}));

    pt = new google.maps.LatLng(42.355518, -71.060225);
	markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing", icon: mark}));

    pt = new google.maps.LatLng(42.300093, -71.061667);
	markers.push(new google.maps.Marker({position: pt, title: "Fields Corner", icon: mark}));

    pt = new google.maps.LatLng(42.373362, -71.118956);
	markers.push(new google.maps.Marker({position: pt, title: "Harvard Square", icon: mark}));

    pt = new google.maps.LatLng(42.320685, -71.052391);
	markers.push(new google.maps.Marker({position: pt, title: "JFK/UMass", icon: mark}));

    pt = new google.maps.LatLng(42.36249079, -71.08617653);
	markers.push(new google.maps.Marker({position: pt, title: "Kendall MIT", icon: mark}));

    pt = new google.maps.LatLng(42.275275, -71.029583);
	markers.push(new google.maps.Marker({position: pt, title: "North Quincy", icon: mark}));

    pt = new google.maps.LatLng(42.35639457, -71.0624242);
	markers.push(new google.maps.Marker({position: pt, title: "Park Street", icon: mark}));

    pt = new google.maps.LatLng(42.3884, -71.119149);
	markers.push(new google.maps.Marker({position: pt, title: "Porter Square", icon: mark}));

    pt = new google.maps.LatLng(42.233391, -71.007153);
	markers.push(new google.maps.Marker({position: pt, title: "Quincy Adams", icon: mark}));

    pt = new google.maps.LatLng(42.251809, -71.005409);
	markers.push(new google.maps.Marker({position: pt, title: "Quincy Central", icon: mark}));

    pt = new google.maps.LatLng(42.31129, -71.053331);
	markers.push(new google.maps.Marker({position: pt, title: "Savin Hill", icon: mark}));

    pt = new google.maps.LatLng(42.29312583, -71.06573796);
	markers.push(new google.maps.Marker({position: pt, title: "Shawmut", icon: mark}));

    pt = new google.maps.LatLng(42.352271, -71.055242);
	markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: mark}));

    pt = new google.maps.LatLng(42.2665139, -71.0203369);
	markers.push(new google.maps.Marker({position: pt, title: "Wollaston", icon: mark}));

    for (var m in markers) {
	    markers[m].setMap(map);

    }

    getMyLocation();

}




