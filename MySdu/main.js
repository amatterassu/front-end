function load() {
	$("#table1").animate({opacity: '0'});
  $("#stud_photo").animate({opacity: '0'});
	$("#table2").hide();
	$("#table3").hide();
	$("#years").hide();
	$("label").hide();
	$("#details").hide();
  $("#hat").hide();
  $(".forgot").animate({opacity: 0})
}
function font_bigger(element) {
	element.style.fontSize = "24px";
}
function font_smaller(element) {
	element.style.fontSize = "21px";
}
$(document).ready(function(){
  $("#in").click(function(){
    $(".login").animate({opacity: '0'}, 250);
    $("#hat").show();
    $("#table1").animate({opacity: '0.8'}, 800);
    $("#stud_photo").animate({opacity: '1'}, 800);
  }); 
  $(".attendance").click(function(){
  	$("#table1").hide(600);
    $("#table2").show({opacity: '0.8'}, 600);
    $("#years").show({opacity: '0.8'}, 600);
    $("#table3").hide(600);
    $("#stud_photo").hide(600);
    $("#details").hide(600);
    $("label").hide(600);
    $("#map").hide();
    $('#texx').hide();
  });
  $(".schedule").click(function() {
  	$("#table3").show({opacity: '0.8'}, 600);
  	$("#stud_photo").hide(600);
  	$("#table1").hide(600);
  	$("#table2").hide(600);
  	$("#years").hide(600);
  	$("label").show({opacity: '0.8'}, 600);
  	$("#details").show({opacity: '0.8'}, 600);
    $("#map").hide();
    $('#texx').hide();
  });
  $("#cant").click(function() {
    $(".forgot").show({opacity: '0.9'}, 400);
  });
});

let map;

      function initMap() {
        const mapOptions = {
          zoom: 15,
          center: { lat: 43.2085996, lng: 76.6690654 },
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        const marker = new google.maps.Marker({
          // The below line is equivalent to writing:
          // position: new google.maps.LatLng(-34.397, 150.644)
          position: { lat: 43.2085996, lng: 76.6690654 },
          map: map,
        });
        // You can use a LatLng literal in place of a google.maps.LatLng object when
        // creating the Marker object. Once the Marker object is instantiated, its
        // position will be available as a google.maps.LatLng object. In this case,
        // we retrieve the marker's position using the
        // google.maps.LatLng.getPosition() method.
        const infowindow = new google.maps.InfoWindow({
          content: "<p>Marker Location:" + marker.getPosition() + "</p>",
        });
        google.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker);
        });
      }