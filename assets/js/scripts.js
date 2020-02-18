// Display Information Modal
$(document).ready(function() {
    $("#myCenterModal").modal('show');
});

// Location of Map
    var MapZoom = 0;
    $("#countries").on("change", function() {
    var country = $(this).val().split(","),
        MapLat = country[0],
        MapLng = country[1],
        MapZoom = parseInt(country[2]),
        location = [MapLat, MapLng]
});

var map = new google.maps.Map(
    document.getElementById('map'), {zoom: MapZoom, center: location});

var marker = new google.maps.Marker({position: location, map: map});