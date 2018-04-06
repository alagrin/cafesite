$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.nav-wrapper').css("background-color", "#000099");
    $('nav').css("position", "fixed");

    $('#intro').mouseenter(function() {
      $(this).css("opacity", "0.8");
    });
    $('#intro').mouseleave(function() {
      $(this).css("opacity", "0.5");
    });
  });