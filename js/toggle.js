$(document).ready(function () {
  if ($(window).width() < 769) {
    $(".page-stuff").toggleClass("active");
    $('#sidebar').toggleClass('active');
  } 
});


$(document).ready(function () {
 $('#sidebarCollapse').on('click', function () {
   $('#sidebar').toggleClass('active');
   $('.page-stuff').toggleClass('active');
 });
});