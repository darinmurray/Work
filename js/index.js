
// Fired when document is ready, wrapps everything  
window.onload = function() { 
 
  smoothScroll('landing') 

    

// ===============   M A I N   ================ // 
// ===============    N A V    ================ // 
// ===============   (ofset)  ================ // 
// can this be done with CSS calc?
let nav_width = $(".nav_floater").outerWidth();
let screen_width = $("body").outerWidth();
let floating_logo_width = $("#floating_logo").outerWidth();
let nav_left_width = $(".nav_left").outerWidth();
let nav_right_width = $(".nav_right").outerWidth();
let nav_offest = Math.floor(Math.abs(nav_left_width - nav_right_width) )-10  ;  // "-10" is visual adjustment
$(".nav_wrapper").css('margin-left', (nav_offest)+"px");
$(".nav_center").css('width', floating_logo_width+"px");
$(".nav_center li a ").css('color', "black");

    console.log(`%c=> screen_width: `, "color:cyan", screen_width);
    console.log(`%c=> nav_width: `, "color:cyan", nav_width);
    console.log(`%c=> floating_logo_width: `, "color:cyan", floating_logo_width);
    console.log(`%c=> nav_left_width: `, "color:cyan", nav_left_width);
    console.log(`%c=> nav_right_width: `, "color:cyan", nav_right_width);
    console.log(`%c=> nav_offest: `, "color:cyan", nav_offest);
    







   
 



// ===============   M A I N   ================ // 
// ===============    N A V    ================ // 
// ===============   (toggle)  ================ //  
  // var isVisible = document.getElementById("yourID").style.display == "block";
  // var isHidden = document.getElementById("yourID").style.display == "none"; 
hiddenElements = $(':hidden');
visibleElements = $(':visible'); //if(!$('#yourID').is(':visible')) { }

let logo_hero = document.getElementById('logo_hero');
// let navigations = document.getElementsByClassName("nav_wrapper");
let toggledElement = document.getElementsByClassName("nav_wrapper") //$('.nav_wrapper')

// $(".nav_wrapper").slideUp('slow'); //.hide();
$(".nav_wrapper").fadeOut(2000); //.hide('slow')

logo_hero.onmouseenter  = function(){
  // this.classList.add('hovered');
  if(!$('.nav_wrapper').is(':visible')) { 
    $(".nav_wrapper").slideDown('fast')
  } 
    logo_hero.onmouseleave = function(){
      let isHovered = $(".nav_wrapper:hover").length != 0 
      let showing = $('.nav_wrapper').is(':visible')
      if (  isHovered && showing ) {
        // nav is showing and entered from the logo image
        // if/else ONLY here to trigger somehing on nav showing but not over logo
      } else {
          //  the delay does not work as well here
          $(".nav_wrapper").slideUp('fast')
      }
    }
    toggledElement[0].onmouseleave = function(){
      let isHovered = $("#logo_hero:hover").length != 0 
      if (  isHovered  ) {
        // mouse moved from nav to logo
      } else {
        // mouse exited nav and logo
        setTimeout(function(){
          $(".nav_wrapper").slideUp('fast')
        }.bind(this),2000)
      }
    }

}






























// ===============  S P E E D  ================ // 
// ===============  (sliders)  ================ // 
// ===============  =========  ================ //  
document.querySelectorAll('.henhouse').forEach(item => {
  item.getBoundingClientRect()
console.log("<<=====Found a henhouse: ", item);
  item.addEventListener('scroll', event => {
    console.log("scrolling henhouse ^^^");
    // var x = event.originalTarget.min;
    // var y = event.originalTarget.max;
    if ( 2+2 == 4 ) {
      console.log("Reversed")
      // do the work
      }
  posNum = getPercentOfRange(x, event.originalTarget.value, y)
  negNum = (1.0 - posNum).toFixed(1)
  event.originalTarget.parentElement.previousElementSibling.style.opacity=negNum; 
  event.originalTarget.parentElement.nextElementSibling.style.opacity=posNum; 
  })
})















  // ===============  U T I L I T Y  ================ // 
  // ===============   (functionS)   ================ // 
  // ===============   ==========    ================ //  
  
  // ==========   Generate a Random Alpha Character   ============= //
  function startCycle() {
    // do something here  
    clockTO = setTimeout(startCycle, 1000) 
    // call to initialize the looping
    startCycle()
   }; // end startTimefunction
  
  // ==========   Generate a Random Alpha Character   ============= //
  randoAlpha = String.fromCharCode(65+Math.floor(Math.random() * 26)); 
  
    // =======   Generate a Random Int between min & max   ========== //
  // getRandomInt(1, 10)*100   for increments less than one second
  function getRandomInt(min, max) { 
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }
 
 






// ======================================================== //
// =============  S M O O T H  S C R O L L  =============== //
// ============== (slowly / with effects) ================= // 
$(document).on("click", "li" , function(e) {
  let location = this.lastChild.hash.substring(1)
  console.log("link is:", location)
  smoothScroll(location)
  e.preventDefault()
});


$(document).on("click", "#logo_hero" , function(e) {
  smoothScroll('landing')
  e.preventDefault()
});




function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
  } return y;
}
function smoothScroll(eID) {
  var offset = 66
  var startY = currentYPosition();
  var stopY = elmYPosition(eID)-offset;
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
      scrollTo(0, stopY); return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
  return false;
}









} // end window load

  