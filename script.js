function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -15.7797, lng: -47.9297 },
    });
    var locais = document.getElementsByClassName('local');
    for (var i = 0; i < locais.length; i++) {
        locais[i].addEventListener('click', function () {
            var lat = parseFloat(this.parentElement.getAttribute('data-lat'));
            var lng = parseFloat(this.parentElement.getAttribute('data-lng'));
            var local = new google.maps.LatLng(lat, lng);
            map.panTo(local);
            map.setZoom(14); 
        });
    }
}
