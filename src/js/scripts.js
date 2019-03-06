import $ from "jquery";
import WOW from 'wow.js';

// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
//     else if (event.detail) {(delta = -event.detail / 3);}
//
//     handle(delta);
//     if (event.preventDefault) {(event.preventDefault());}
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     var time = 2000;
//     var distance = 25;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }
//
// if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
//   window.onmousewheel = document.onmousewheel = wheel;

$(document).ready(function() {
  $(".g-button").click(function(event) {
    event.preventDefault();
    $(".greek").show();
    $(".english").fadeOut();
  });
  $(".e-button").click(function(event) {
    event.preventDefault();
    $(".english").show();
    $(".greek").fadeOut();
  });
  var wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated',
      offset:       0,
      mobile:       true,
      live:         true,
      callback:     function(box) {
      },
      scrollContainer: null,
      resetAnimation: true,
    }
  );
  wow.init();

  var nodes = document.querySelectorAll(".story");
  for(var i=0; i<nodes.length; i++){
    var words = nodes[i].innerText;
    var html = "";
    for(var i2=0; i2<words.length; i2++){
      if(words[i2] == " ")html +=
      words[i2];
      else html +=
      "<span class='wow'>"+words[i2]+"</span>"
    }
    nodes[i].innerHTML = html;
  }




});
