$(document).ready(function(){
	$('.menu-btn').click(function() {
		$('.navbar .menu').toggleClass("active");
	});
	$("#in").click(function(){
		$("#table1").animate({opacity: 0.9});
		$("#stud").animate({opacity: 0.9});
		$("#table2").animate({opacity: 0.9});
	  	$("#table3").animate({opacity: 0.9});
		$(".navbar").show();
	  	$(".att").show();
		$(".shedul").show();
		$(".login").animate({opacity: '0'}, 250);
	}); 
});
function load() {
	$("#table1").animate({opacity: 0});
  	$("#stud").animate({opacity: 0});
	$("#table2").animate({opacity: 0});
	$("#table3").animate({opacity: 0});
  	$(".navbar").hide();
	$(".att").hide();
	$(".shedul").hide();
}