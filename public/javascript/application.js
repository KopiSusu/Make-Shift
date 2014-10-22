$(document).ready(function() {
  var glassUp = false;

  $( ".toggle" ).click(function() {

    if (glassUp) {

      $( ".toggle").removeClass("aftertoggle")

      setTimeout(function() {
        $( ".glass" ).removeClass("up");

        $(".side").removeClass("sideup");

      }, 400);

      glassUp = false;

    } else {
      $( ".toggle").addClass("aftertoggle")

      $( ".glass" ).addClass("up");

      $(".side").addClass("sideup");

      glassUp = true;
    }
  });

});
