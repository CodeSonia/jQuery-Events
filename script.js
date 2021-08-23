/* Event Handler
$(document).ready(function() {
  $("#stream1_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream1").addClass('highlight_stream');
 });
 $("#stream2_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream2").addClass('highlight_stream');
 });
 $("#stream3_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream3").addClass('highlight_stream');
 });
}); 
*/

/*jQuery animation effects*/
/*
$(document).ready(function() {
  $("#stream1_btn").on("click", function() {
    //show() method, tells jQuery how fast to show the element
      $(".stream1").show();
      $(".stream1").show("slow");
      $(".stream1").show("medium");
      $(".stream1").show("fast");
      $(".stream1").show("1000");
 });
*/

/*
$(document).ready(function() {
  $("#stream1_btn").on("click", function() {
    //show() method, tells jQuery to hide elements
      $(".stream1").hide();
      $(".stream1").hide("slow");
      $(".stream1").hide("medium");
      $(".stream1").hide("fast");
      $(".stream1").hide("1000");
  });
 $("#stream2_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream2").addClass('highlight_stream');
 });
 $("#stream3_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream3").addClass('highlight_stream');
 });
}); 
*/

//jQuery toggle button works like an on and off button
$(document).ready(function() {
  $("#stream1_btn").on("click", function() {
    //show() method, tells jQuery to hide elements
      $(".stream1").toggle();
      $(".stream1").toggle("slow");
  });

 $("#stream2_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream2").addClass('highlight_stream');
 });
 $("#stream3_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream3").addClass('highlight_stream');
 });
}); 