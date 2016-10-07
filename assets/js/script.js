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

// loader end

document.body.style.overflowY = "hidden"
setTimeout(function() {
  document.getElementById("loader").style.opacity = "0";
  document.body.style.overflowY = "auto"
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000);
  // document.getElementById("loader").style.display = "none";
}, 1000);

// nav

var scrollTop = $(window).scrollTop();
var windowHeight = $(window).height() - 40;


$(window).on('scroll', function() { 
  console.log(scrollTop + ', ' + windowHeight);
  var windowHeight = $(window).height() - 40;
  scrollTop = $(window).scrollTop();
  if (scrollTop >= windowHeight) {
    $("#mainNav").css("position", "fixed");
  } else {
    $("#mainNav").css("position", "absolute");
  }
});

/*header animation

//declare array of objects
var skills = [$('.skill-container span[class="active"]'), $('.skill-container span[class="next"]'), $('.skill-container span[class="previous"]')]

//$('.skill-container span[class="next"], .skill-container span[class="previous"]').css({'display': 'none'});

setTimeout(function() {
    for (var i=0; i<Infinity; i++) {

    // ACTIVE TO PREVIOUS
    $('.skill-container span[class="active"]').animate({'left': '-2000px'}, { duration: 1000, queue: false });
    
    //change class
    //$('.skill-container span[class="active"]').removeClass('active').addClass('previous');
  
    // NEXT TO ACTIVE
    $('.skill-container span[class="next"]').animate({'left': '0px'}, { duration: 1000, queue: false });
    
    //change class
    //$('.skill-container span[class="next"]').removeClass('next').addClass('active');
    
    // PREVIOUS TO NEXT
    $('.skill-container span[class="previous"]').css({'left': '2000px'});
    
    //change class
    //$('.skill-container span[class="previous"]').removeClass('previous').addClass('next');
    
    //change classes
    $('.skill-container span[class="active"]').removeClass('active').addClass('previous');
    $('.skill-container span[class="next"]').removeClass('next').addClass('active');
    $('.skill-container span[class="previous"]').removeClass('previous').addClass('next');
    

    
  }
}, 1500);*/



