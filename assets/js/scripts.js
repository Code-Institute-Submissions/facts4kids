// Display Information Modal
$(document).ready(function() {
    $("#myCenterModal").modal('show');
    var latlng = new google.maps.LatLng(38.504669, 9.510865);
    var options = {
        zoom: 2,
        center: latlng,
        gestureHandling: 'cooperative',
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $('#countries').change(function() {   
        var coordinate = $('select option:selected').val().split(',');
        var latlng = new google.maps.LatLng(coordinate[0], coordinate[1]);
        var options = {
            zoom: parseInt(coordinate[2]),
            center: latlng,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };        
        var map = new google.maps.Map(document.getElementById('map'), options);        
    });
    // initializing the map
    var map = new google.maps.Map(document.getElementById('map'), options);
});