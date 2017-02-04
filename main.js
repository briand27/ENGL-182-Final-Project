$(".slides").click(function(event) {

  console.log("in click");

  var clicked = event.target;
  var className = clicked.className;

  console.log(className);

  //do something if not a "slide_x" class, probably super class

  //var index = className.split("_")[1];
  var nextSlide = clicked.nextElementSibling;

  console.log(nextSlide);

  var nextSlideName = nextSlide.className;

  console.log(nextSlideName);

  //should not execute for last slide
  $('html,body').animate({
    scrollTop: $("." + nextSlideName).offset().top},
    'slow');
  });
