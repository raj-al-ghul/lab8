function initMap() {
  // Create center marker at CICC 32.8849865,-117.2413314
  var cicc_ltlng = {lat:32.8849865, lng:-117.2413314};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cicc_ltlng,
    zoom: 18 // old -15
  });

  var marker = new google.maps.Marker({
      position: cicc_ltlng,
      map: map,
      title: 'CICC'
  });

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
  });

  function addMarker(ltlng) {
    var marker = new google.maps.Marker({
      position: ltlng, 
      map: map,
      title: 'My Marker'
    });
  }
}