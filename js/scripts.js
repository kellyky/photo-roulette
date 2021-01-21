$(document).ready(function() {
  $("form#photoChoice").submit(function(event) {
    event.preventDefault();
    const num = parseInt($("#number").val());
    $("body").addClass("play-again");
    $("#photoChoice").hide();
    $("p").hide();
    $("#play-again").show();
    
    if (num === 1) {
      $(".picture1").show();

    } else if (num === 2) {
      $(".picture2").show();

    } else if (num === 3) {
      $(".picture3").show();
    } else {
      alert("Please enter 1, 2, or 3.");
    }
  });
});
