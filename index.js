if($(window).width() <= 1275){
  $(".navbarInside").hide();
  $(".menuClose").hide();
  $(".introImg-desktop1").hide();
  $(".introImg-desktop2").hide();

  $(".menu").click(function() {

    $(".navbarInside").slideToggle();
    $(".menu").hide();
    $(".menuClose").show();
    $(".firstImg").removeClass("introImg");

  })

  $(".menuClose").click(function() {

    $(".navbarInside").slideToggle();
    $(".menuClose").hide();
    $(".menu").show();
    $(".firstImg").addClass("introImg");

  })
}

if($(window).width() >= 1275) {

  $(".menu").hide();
  $(".menuClose").hide();
  $(".introImg-mobile").hide();
}
