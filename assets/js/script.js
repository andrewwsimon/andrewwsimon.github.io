/* ------------ SCRIPTS ------------ */

/*
$(".navbar-nav li").mouseenter(function() {
   $("this").animate({
      color: "#a1573a"
   }, 1000);
});
*/

/* full width
if ($(window).width <= 580) {
   alert("suhdude");
   $('[class~="full-width"]').addClass('full-width-on').before('</div>').after('<div class="container">');
}
*/

// animate scrolling
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
