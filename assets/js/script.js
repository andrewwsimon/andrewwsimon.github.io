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

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
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

//header animation

//declare array of objects
//var skills = [$('.skill-container span[class="active"]'), $('.skill-container span[class="next"]'), $('.skill-container span[class="previous"]')];

// SET INITIAL VALUES
//$(".skill-container span:nth-child(1)").css({'left': '0'});
//$(".skill-container span:nth-child(2)").css({'left': '2000'});
//$(".skill-container span:nth-child(3)").css({'left': '-2000'});

//$('.skill-container span[class="next"], .skill-container span[class="previous"]').css({'display': 'none'});
//var i =0;
//for (i=0; i<5; i++) {
  /*setTimeout(function() {

      // ACTIVE TO PREVIOUS
      function activeToPrevious() { $('.skill-container span[class="active"]').animate({'left': '-2000px'}, { duration: 1000, queue: false }); }
    
      // NEXT TO ACTIVE
      function nextToActive() { $('.skill-container span[class="next"]').animate({'left': '0'}, { duration: 1000, queue: false }); }
      
      // PREVIOUS TO NEXT
      function previousToNext() { $('.skill-container span[class="previous"]').css({'left': '2000px'}); }
      
      //change classes
      function changeClasses() {
      $('.skill-container span[class="active"]').removeClass('active').addClass('previous');
      $('.skill-container span[class="next"]').removeClass('next').addClass('active');
      $('.skill-container span[class="previous"]').removeClass('previous').addClass('next')
      }*/
      
  //}, 1500);
//}
$('.skill-container li:nth-child(1)').css({'left': '0'});
$('.skill-container li:nth-child(2)').css({'left': '-2000px'});
$('.skill-container li:nth-child(3)').css({'left': '2000px'});

setInterval(function() {
    $('.skill-container li:nth-child(1)').animate({'left': '-2000px'}, { duration: 1000, queue: false });
    $('.skill-container li:nth-child(2)').css({'left': '2000px'}).animate({'left': '0'}, { duration: 1000, queue: false });
    $('.skill-container li:nth-child(3)').after($('.skill-container li:nth-child(1)'));
}, 2000);
