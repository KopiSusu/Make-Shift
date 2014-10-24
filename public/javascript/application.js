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



  x = new Array();

  $( ".checkboxes").change(function() {
    //add name of search item in to "search area"

    //console.log($(this).attr('value'));
    if (x.indexOf($(this).attr('value')) == -1)
    {
      x.push($(this).attr('value'));
      $(".panel-body-checked").append("<p class=\"checked\" data-value="+$(this).attr('value')+">"+$(this).attr('value')+"</p>");
    }
    else{
      removeable = $(".checked[data-value^='"+$(this).attr('value')+"']");
      removeable.remove();
      console.log($(this).attr('value'));
      x.splice(x.indexOf($(this).attr('value')),1);


    }
  });

});
