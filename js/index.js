
// Fired when document is ready, wrapps everything  
window.onload = function() { 
 
  // start by scrolling to home if reloaded
  smoothScroll('landing')
    





  const cursor = document.querySelector('.cursor_container');
  const y_offset = 40 // 35  half thw width
  const x_offset = 40 // 15  half the height
  document.addEventListener('mousemove', (e)=> {
      cursor.setAttribute("style", "top: "+(e.pageY-y_offset)+"px; left: "+(e.pageX-x_offset)+"px")
  })

// resolve this so it creates a collection of parent/child elements to observe
// https://stackoverflow.com/questions/5338716/get-multiple-elements-by-id

// https://stackoverflow.com/questions/68091762/how-can-i-add-a-class-to-an-element-from-an-array-on-hover

// let test = document.getElementById("nav_wrapper");
// // let test = document.querySelector('li');
// // This handler will be executed every time the cursor 
// // is moved over a different list item
// test.addEventListener("mouseover", function( event ) {
//   cursor.setAttribute("style", "top: "+(event.pageY-y_offset)+"px; left: "+(event.pageX-x_offset)+"px")
//   // highlight the mouseover target
//   cursor.style.opacity = "1.0";
// console.log("OVER it", event.target);
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "lime";
//     // cursor.style.opacity = "0.1";
//   }, 300);
// }, false);

//$(cursor).hide()


// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 
$(".cursor, .cursor_caret").hide();

$("#nav_wrapper").children().each(function(){
  $(this).hover(function(el){
    // console.log(`%c=> el: `, "color:cyan", el);
    $(".cursor").show();
    $(".cursor_main").hide();
    $(".cursor_caret").hide();
  }, function(){
    $(".cursor").hide();
    $(".cursor_main").show();
    $(".cursor_caret").hide();  // it looks kind of nice with this on...
  });
});

// section#contact  form.contact container.form
$("section#contact").each(function(){
  // using.each so it includes all input types
  $(this).hover(function(el){
    $(".cursor").hide();
    $(".cursor_main").hide();
    $(".cursor_caret").show();
  }, function(){
    $(".cursor").hide();
    $(".cursor_main").show();
    $(".cursor_caret").hide();
    // make this fade out
  });
});


$("#about_me").hover(function(e){
// transform slowly??
  $(".cursor_main").css("border-color" , "#ffffff");
}, function(){
  $(".cursor_main").css("border-color" , "#44ffee");
});


$("#submit").hover(function(e){
  $(".cursor").show();
  $(".cursor_main").hide();
  $(".cursor_caret").hide();
}, function(){
  $(".cursor").hide();
  $(".cursor_main").hide();
  $(".cursor_caret").show();
});






// ==========   S N A P  S C R O L L   ================ // 
// // // uncoment block below for snap scrolling
gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top 80px",
        pin:true,
        scrub:1,
        snap: 1, //,
        pinSpacing: true // test with False
        })
  
  });





// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 

// gsap.fromTo("#floating_logo", { y: "0px", scale: 0}, {duration: 1 , delay: 2, y: "50vh", ease: "power1.in", scale: 5} )
// gsap.from("#floating_logo", {duration: 1 , delay: 2, y: "50vh", ease: "power1.in", scale: 5} )
let scale_calc = 3
gsap.from("#floating_logo",  {
  scrollTrigger: {
    trigger: "#landing", // content
    start: "top top",
    toggleActions: "restart pause reverse pause",
    // markers:true,
    scrub: true, //1, 2, 3 numbers are slower
    end: "bottom 10%"  // ,  // +=200px
    //end: "+=200px" //"bottom 80%"  // ,  // +=200px
    // pin: "#floating_logo_large"  // true
  }, 
  // duration: 1 , // no effect when scrubbed above
  // delay: 2, 
  y: "40vh", 
  ease: "power5.in", 
  scale: scale_calc
} );


// gsap.to("#intro", {duration: 1 , delay: 1, y: "0vh", ease: "power1.in", opacity: 0.2} )


gsap.to("#intro",  {
  scrollTrigger: {
    trigger: "#landing", // content
    start: "20% bottom-200", // play with this for timing ! ! ! ! ! ! !! 
    toggleActions: "restart pause reverse pause",
    // markers:true,
    scrub: true //, //1, 2, 3 numbers are slower
    // end: "bottom top"  // ,  // +=200px
    // pin: "#floating_logo_large"  // true
  }, 
  // duration: 1 , // no effect when scrubbed above
  // delay: 2, 
  //y: "40vh", 
  // ease: "power5.in", 
  opacity: 0
} );












  // var header = document.getElementById('floating_logo_test');
  // var logoStartingPosition = header.getBoundingClientRect().top;
  
  // function fadeOutOnScroll(element) {
  //   if (!element) { return; }
  //   var viewPort = window.innerHeight; // 0	// safari
  //   var scrollTop = document.documentElement.scrollTop; // 0	// safari
  //   var logoTop = element.getBoundingClientRect().top;
    
  //   //if (scrollTop <= viewPort) { console.log("true") } else { console.log("FALSE") }
  //   //console.log("scrollTop ", scrollTop, "viewPort ", viewPort)
  //   if ( (scrollTop >= 0) && (scrollTop <= (viewPort/2)) ) {  //distanceToTop		
  
  //     percentage = getPercentOfRange(0, logoTop, (logoStartingPosition) ) //(min, current, max)
  //     var scaleNow = Math.max(percentage, 0.2)
  //       $( element ).css({    
  //         transform: "scale("+scaleNow+")" ,   
  //         position: "flex",
  //         top: 0
  //       });
  //     // console.log(" D I S P L A Y  S T A T E  scrollTop is; "+ scrollTop+ " 1st viewport is; "+ viewPort)
  //   // element.innerHTML = ( scrollTop - logoTop )	
  //     console.log("ONE scale; "+ scaleNow )   
  //   } 
    
  //   // if ( scrollTop >= viewPort ) {  
  //   // 	console.log("End transition at; "+  "transition END")   
  //   // 	// scaleNow = 0.5 
  //   // }
    
  
  //   if ( logoTop <= 16 ) { 
  //     // make logo stay, present nav?	
  //     //let logoWidth = element.offsetWidth;
  //     // var logo_left_offset = (window.innerWidth/2)-(element.offsetWidth/2)
  //     //let logo_left_offset = element.offsetWidth/2 //window.innerWidth/2
      
  //       $( element ).css({  
  //         transform: "scale("+scaleNow+")",
  //         position: "fixed",
  //         top: 16 //,
  //         // left: logo_left_offset //250 //logo_left_offset
  //       });
  //   //console.log("TWO ", logo_left_offset)
  //  console.log(" scrollTop is; "+ scrollTop)
  //   }


  // }

  
  
  // function scrollHandler() {
  //   fadeOutOnScroll(header);
  // }
  
  // window.addEventListener('scroll', scrollHandler);
  
  
  // // ====== get % of # between min & max of a given range ========= //
  // // E.G. from 35 to 356, what percentage (of the range) is 121? 
  // function getPercentOfRange(min, current, max) {  
  //   // change *1 to *100 for whole numbers
  //   // currently returning opacity 0.1 - 1.0
  //   return percentage = (((current - min) * 1) / (max - min)) //.toFixed(1);  
  // } 














































// ===============   M A I N   ================ // 
// ===============    N A V    ================ // 
// ===============   (ofset)  ================ // 
// can this be done with CSS calc?
let nav_width = $("#nav_floater").outerWidth();
let screen_width = $("body").outerWidth();
let floating_logo_width = $("#floating_logo").outerWidth();
let nav_left_width = $("#nav_left").outerWidth();
let nav_right_width = $("#nav_right").outerWidth();
let nav_offest = Math.floor(Math.abs(nav_left_width - nav_right_width) )  ;  // "-10" is visual adjustment


$("#nav_wrapper").css('margin-left', (nav_offest)+"px");
$("#nav_center").css('width', floating_logo_width+"px");

// make this happen AFTER logo is covering it
$("#nav_center li a ").css('color', "black");





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

//   turn this back on when   done with LOGO TESTING <<+++++++++=============
//   turn this back on when   done with LOGO TESTING <<+++++++++=============
//   turn this back on when   done with LOGO TESTING <<+++++++++=============
 // // // $(".nav_wrapper").fadeOut(2000); //.hide('slow')

// logo_hero.onmouseenter  = function(){
//   // this.classList.add('hovered');
//   if(!$('.nav_wrapper').is(':visible')) { 
//     $(".nav_wrapper").slideDown('fast')
//   } 
//     logo_hero.onmouseleave = function(){
//       let isHovered = $(".nav_wrapper:hover").length != 0 
//       let showing = $('.nav_wrapper').is(':visible')
//       if (  isHovered && showing ) {
//         // nav is showing and entered from the logo image
//         // if/else ONLY here to trigger somehing on nav showing but not over logo
//       } else {
//           //  the delay does not work as well here
//           $(".nav_wrapper").slideUp('fast')
//       }
//     }
//     toggledElement[0].onmouseleave = function(){
//       let isHovered = $("#logo_hero:hover").length != 0 
//       if (  isHovered  ) {
//         // mouse moved from nav to logo
//       } else {
//         // mouse exited nav and logo
//         setTimeout(function(){
//           $(".nav_wrapper").slideUp('fast')
//         }.bind(this),2000)
//       }
//     }

// }



// ===============    S U B    ================ // 
// ===============    N A V    ================ // 
// ===============   (toggle)  ================ //  
let work_menu = $("li.work");

$("li.work, li.work ul").hover(function(e){
  // transform slowly??
  $("li.work ul").show();
}, function(){
  console.log("moved out...");
    $("li.work ul").hide();
  });
















































// ======================================================== //
// =============  S M O O T H  S C R O L L  =============== //
// =============       ( triggers )         =============== // 
$(document).on("click", "li" , function(e) {
  console.log(`%c=> Click li e=: `, "color:cyan", e.target.hash);
  let location = e.target.hash.substring(1)
  smoothScroll(location)
  e.preventDefault()
});


$(document).on("click", "#logo_hero" , function(e) {
  smoothScroll('landing')
  e.preventDefault()
});



// ======================================================== //
// =============  S M O O T H  S C R O L L  =============== //
// ============== (slowly / with effects) ================= // 
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
 
 



//  //  // ===============  S P E E D  ================ // 
//  //  // ===============  (sliders)  ================ // 
//  //  // ===============  =========  ================ //  
//  //  document.querySelectorAll('.henhouse').forEach(item => {
//  //    item.getBoundingClientRect()
//  //  console.log("<<=====Found a henhouse: ", item);
//  //    item.addEventListener('scroll', event => {
//  //      console.log("scrolling henhouse ^^^");
//  //      // var x = event.originalTarget.min;
//  //      // var y = event.originalTarget.max;
//  //      if ( 2+2 == 4 ) {
//  //        console.log("Reversed")
//  //        // do the work
//  //        }
//  //    posNum = getPercentOfRange(x, event.originalTarget.value, y)
//  //    negNum = (1.0 - posNum).toFixed(1)
//  //    event.originalTarget.parentElement.previousElementSibling.style.opacity=negNum; 
//  //    event.originalTarget.parentElement.nextElementSibling.style.opacity=posNum; 
//  //    })
//  //  })










} // end window load

  