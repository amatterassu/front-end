function load() {
    $(".forgot").hide();
    $(".forgot").animate({opacity: 0});
    $(".sent").hide();
    $(".sent").animate({opacity: 0});
    $(".x").hide();
}
$(document).ready(function(){
    $("#cant").click(function(){
      $(".forgot").show();
      $(".forgot").animate({opacity: 1});
      $(".x").show();
      $(".x").animate({opacity: 1});
    }); 
    $("#send").click(function(){
        $(".sent").show();
        $(".sent").animate({opacity: 1});
        $(".x").hide();
    }); 
    $("#Ok").click(function(){
        $(".forgot").hide();
        $(".forgot").animate({opacity: 0}, 600);
        $(".sent").hide();
        $(".sent").animate({opacity: 0}, 600);
    });    
    $(".x").click(function(){ 
        $(".x").hide();
        $(".forgot").hide();
    });
});