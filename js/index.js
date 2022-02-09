
window.onload = function() { 
 

// for layout purposes only
// hiddeen by default in the css
// $("#centerlines").show()
 $(".carousel_panel").hide()


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



// // SUBMIT BUTTON CURSOR choice
// $(".show_this_carousel").click(function(e){
//   e.preventDefault
//   $("section#illustration").show();
//   $("section#logos").hide();
//   $("section#products").hide();
// }, function(){
//   // $("section#illustration").show();
//   // $("section#logos").hide();
//   // $("section#products").hide();
// });


// ==========  test slideshow buttons  ================
// jQuery because it's simpler and shorter
const carousel_panels = $(".carousel_panel")
$(document).on("click", ".show_carousel" , function(e) {   
  e.preventDefault()
  show_this = e.currentTarget.attributes.href.value
  console.log(`%c=> this fucking target: `, "color:cyan", e.currentTarget.attributes.href.value );
 
  $(".carousel_panel").hide();
  $(show_this).show();
});


$(document).on("click", ".close_carousel" , function(e) {   
  $(".carousel_panel").hide();
});






// ===============    S U B    ================ // 
// ===============    N A V    ================ // 
// ===============   (toggle)  ================ //  
let work_menu = $(".sub_nav"); //, li.work ul
$(work_menu).hide();
// SHOW the sub-menu when hovering this li
$("li.work").hover(function(e){
    console.log(`%c=> showing the sub-menu `, "color:gray");
    $(work_menu).fadeIn();
}, function(){
    console.log(`%c=> hiding the sub-menu `, "color:gray");
    $(work_menu).fadeOut();
    // why does this need to be here? t should be in the .each.hover function below...
    $(".cursor_braces").css( "transform", "rotate(90deg)" );
});




// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 
const cursor = document.querySelector('.cursor_container');
const y_offset = 40 // 35  half thw width
const x_offset = 40 // 15  half the height
document.addEventListener('mousemove', (e)=> {
    cursor.setAttribute("style", "top: "+(e.pageY-y_offset)+"px; left: "+(e.pageX-x_offset)+"px")
})
// hide initially
$(".cursor_braces, .cursor_caret").hide();
//$(cursor).hide()


















// change the ROTATION on the cursor in the SUB-MENU
// This could be over ONLY "#sub_nav li", NOT "#nav li" as there are no angles in #nav
// $(".sub_nav li").each(function(big_e){
$(work_menu).children('li').each(function(big_e){
  $(this).hover(function(calc_angle){
    let current_target = calc_angle.currentTarget
    var target_width = calc_angle.currentTarget.offsetWidth
    // get the angle
    new_angle = getRotation(current_target)
    //set angle if existing
    $(".cursor_braces").css( "transform", "rotate("+(90+new_angle)+"deg)"    );
    $(".cursor_braces").css( "font-size", target_width+"px" );  
  })
});
  
    function getRotation(element) {
    // calcualtes the current rotation of a provided element (HTML object) and returns the angle (angle or 0)
    // from :  https://css-tricks.com/get-value-of-css-rotation-through-javascript/  
    // var el = this // document.getElementById( el_id );
    var st = window.getComputedStyle(element, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "fail...";
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    // console.log('Matrix: ' + tr);  
    if ( tr != 'none' ) {
        // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
        var values = tr.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var scale = Math.sqrt(a*a + b*b);
        // arc sin, convert from radians to degrees, round
        // DO NOT USE: see update below
        var sin = b/scale;
        // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        // works!
        console.log(`%c=> cursor angle: `, "color:red",  + angle + 'deg');
        return angle //= null ?? 0;
      }
      return 0
    }
  
  


  

// Main NAV CURSOR choice
// do this for #nav li each FIRST CHILD only, NOT sub-menus or extra items
$(".work, .about_me, .home, .contact, .resume").each(function(big_e){
  $(this).hover(function(little_e){
    console.log(`%c=> hovering a main LI in the main NAV `, "color:orange");
    $(".cursor_braces").show();
    $(".cursor_main").hide();
    $(".cursor_caret").hide();
  }, function(){
    console.log(`%c=> main nav li not being hovered anymore... `, "color:orange");
      $(".cursor_braces").hide();
      $(".cursor_main").show();
      $(".cursor_caret").hide();  // it looks kind of nice with this on...
  });
});

// SUB NAV CURSOR choice
// same as above, but eliminats problem: cursor reverts when going from sub-nav back to nav
$(work_menu).hover(function(little_e){
  console.log(`%c=> (hovering) SUB_menu: `, "color:green");
  $(".cursor_braces").show();
  $(".cursor_main").hide();
  $(".cursor_caret").hide();
}, function(current_tag){
  console.log(`%c=> NOT on sub_menu `, "color:green");
    $(".cursor_braces").hide();
    $(".cursor_main").show();
    $(".cursor_caret").hide();  // it looks kind of nice with this on...
});
 
// CONTACT CURSOR choice  form.contact container.form
$("section#contact").each(function(){
  // using.each so it includes all input types
  $(this).hover(function(el){
    $(".cursor_braces").hide();
    $(".cursor_main").hide();
    $(".cursor_caret").show();
  }, function(){
    $(".cursor_braces").hide();
    $(".cursor_main").show();
    $(".cursor_caret").hide();
    // make this fade out
  });
});

// ABOUT_ME CURSOR choice
$("#about_me").hover(function(e){
// transform slowly??
  $(".cursor_main").css("border-color" , "#ffffff");
}, function(){
  $(".cursor_main").css("border-color" , "#44ffee");
});

// SUBMIT BUTTON CURSOR choice
$("#submit").hover(function(e){
  $(".cursor_braces").show();
  $(".cursor_main").hide();
  $(".cursor_caret").hide();
}, function(){
  $(".cursor_braces").hide();
  $(".cursor_main").hide();
  $(".cursor_caret").show();
});









// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 

// this is the working FROM version
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

// gsap.to("#intro",  {
//   scrollTrigger: {
//     trigger: "#landing", // content
//     start: "20% bottom-200", // play with this for timing ! ! ! ! ! ! !! 
//     toggleActions: "restart pause reverse pause",
//     // markers:true,
//     scrub: true //, //1, 2, 3 numbers are slower
//     // end: "bottom top"  // ,  // +=200px
//     // pin: "#floating_logo_large"  // true
//   }, 
//   // duration: 1 , // no effect when scrubbed above
//   // delay: 2, 
//   //y: "40vh", 
//   // ease: "power5.in", 
//   opacity: 0
// } );


// var tl = gsap.timeline( { defaults:{ duration: 1.0, ease: Back.easeOut.config(2), opacity: 0 }})
var tl = gsap.timeline( { defaults:{ duration: 0.5, opacity: 0 }})
tl.from(".intro_text", {delay:1, scale: .2, transformOrigin: 'bottom', stagger: .2 }  ) //, "=.2"












gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
      console.log(`%c=> y: `, "color:cyan", y);

		// if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
		// 	let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
		// 		totalMovement = (panels.length - 1) * targetElem.offsetWidth;
		// 	y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		// }
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});



// https://codepen.io/GreenSock/pen/bGexQpq
// https://greensock.com/st-demos/
// https://greensock.com/scrolltrigger/?ref=30488
// https://codepen.io/collection/DkvGzg?cursor=ZD0xJm89MSZwPTEmdj0z

// // // // serious problem... this snap scroll works GREAT, escept for the fact that it completely fucks up the main menu nav...
// // // // serious problem... this snap scroll works GREAT, escept for the fact that it completely fucks up the main menu nav...
// // // // serious problem... this snap scroll works GREAT, escept for the fact that it completely fucks up the main menu nav...

// ==========   S N A P  S C R O L L   ================ // 
// // // uncoment block below for snap scrolling
//  gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".scroll_panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//       trigger: panel,
//       start: "top top",
//       pin:true,
//       scrub:1,
//       snap: 1, //,
//       pinSpacing: false // test with False
//       })
// });


// Perhaps a good simple pure js alternative??
// https://stackoverflow.com/questions/46756664/on-scroll-scroll-100vh-down-up-works-once



// $(document).on('wheel', function(e) {
//   let deltathing = e.originalEvent.deltaY
//   console.log(`%c=> deltathing: `, "color:green", deltathing);
//   // e.preventDefault();
//   $('html, body').stop(true).animate({
//     scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
//   });
// });



// WORKING, BUT NOT NEEDED??????

// $("#scroll_up_arrow ").on('click', function(e) {
// // I should just have this go to nex/previous anchor...
//   $('html, body').stop(true).animate({
//     // scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
//     scrollTop: '-=' + $(window).height() + 'px'
//   });
// });


// $("#scroll_down_arrow ").on('click', function(e) {
// // I should just have this go to nex/previous anchor...
//   $('html, body').stop(true).animate({
//     // scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
//     scrollTop: '+=' + $(window).height() + 'px'
//   });
// });
















// start by scrolling to home if reloaded
//smoothScroll('landing')



// this WAS KIND OF WORKING WELL!! but then just sucked to use... 
// keeps snapping to the wrong panel too fast
// gsap.registerPlugin(ScrollTrigger);

// function goToSection(i, anim) {
//   gsap.to(window, {
//     scrollTo: {y: i*innerHeight, autoKill: false},
//     duration: 1
//   }); 
//   if(anim) {
//     anim.restart();
//   }
// }

// gsap.utils.toArray(".scroll_panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     onEnter: () => goToSection(i)
//   });
  
//   ScrollTrigger.create({
//     trigger: panel,
//      start: "bottom center",
//     // onEnterBack: () => goToSection( i ),
//   });
// });









// ======================================================== //
// =============     C A R O U S E L      =============== //
// ============== (slowly / with effects) ================= // 
// (function() {

  // var $carousels = $('.js-carousel');
  
  // $carousels.each(function(index, container) {
  //   var tl = new TimelineMax({paused: true});
  //       $item = $('.carousel__item', container),
  //       itemCount = $item.length,
  //       currentSlide = 0,
  //       buttons = {
  //          prev: $('.js-carousel-prev', container),
  //          next: $('.js-carousel-next', container),
  //       };
    
  
  //   for(var i = 0; i < itemCount; i++) {
      
  //     TweenLite.set($('.carousel__item').eq(i), {left: - (i * 100) + '%'});
              
  //     if(i != 0) {
  //       tl.addPause('pause' + i);
  //     }
  //     if(i != itemCount -1) {
  //       tl.to($item[i], 0.2, {xPercent: -100, ease: Linear.easeInOut}, "tween" + i)
  //         .from($item[i + 1], 0.2, {xPercent: 100, ease: Linear.easeInOut}, "tween" + i);      
  //     }
  //   }
    
  //  buttons.prev.on('click', function() {
  //     tl.reverse();
  //   });
    
  //   buttons.next.on('click', function() {
  //     tl.play();
  //   });
    
      
  // });
    
  // })();




// ===========  C A R O U S E L  =========== //
// ===========      simple       =========== //
// ===========  fading carousel  =========== //
// const slide_buttons = $(".js-carousel-button ")
// collect all carousels
var carousels = $('.carousel_container');
// uniquefy each carousel 
carousels.each(function(index, container) {
  // uniquefy each carousel
  container.id = $(container).attr('data-name') + "_carousel"
            // collect the slidese per each carousel
            // this is repeated in the switchSlides function below, dry it?
            let mySlides = $(container).find(".carousel__item ")
  // uniquefy each slide
  $(mySlides).each(function(index) { 
    this.id = "slide_"+ index
  });  

});

function switchSlides(selected_carousel){
  // collect the slidese per each carousel
  let theseSlides = $(selected_carousel).find(".carousel__item ")
  let current_slide = $(selected_carousel).find(".showing")[0] 
  let next_slide = current_slide.nextElementSibling ?? theseSlides[0]
  let prev_slide = current_slide.previousElementSibling ?? theseSlides[theseSlides.length-1]
  return [current_slide, prev_slide, next_slide];
}

// ==========  C A R O U S E L   B U T T O N S  ================
// jQuery because it's simpler and shorter
$(document).on("click", ".js-carousel-button " , function(e) { 
  // let this_button = e.target.parentElement.id
  let this_butons_direction = e.target.parentElement.dataset.direction
  let this_butons_carousel = e.target.parentElement.parentElement.parentElement  
  let [current_slide, prev_slide, next_slide] = switchSlides(this_butons_carousel);
  
    if ( this_butons_direction == 'previous' ) {
      console.log(`%c<== Show Previous Slide: `, "color:LightCyan");
      $(current_slide).removeClass("showing"); 
      $(prev_slide).addClass("showing"); 
    } else {
      console.log(`%cShow Next Slide ==> `, "color:LightCyan");
      $(current_slide).removeClass("showing"); 
      $(next_slide).addClass("showing"); 
    }
    // current_slide = null
    // prev_slide = null
    // next_slide = null
});




















// ======================================================== //
// =============  S M O O T H  S C R O L L  =============== //
// =============       ( triggers )         =============== // 
// $(document).on("click", "li" , function(e) {
//   console.log(`%c=> Click li e=: `, "color:cyan", e.target.hash);
//   let location = e.target.hash.substring(1)
//   smoothScroll(location)
//   e.preventDefault()
// });


// $(document).on("click", "#logo_hero" , function(e) {
//   smoothScroll('landing')
//   e.preventDefault()
// });



// ======================================================== //
// =============  S M O O T H  S C R O L L  =============== //
// ============== (slowly / with effects) ================= // 
// function currentYPosition() {
//   // Firefox, Chrome, Opera, Safari
//   if (self.pageYOffset) return self.pageYOffset;
//   // Internet Explorer 6 - standards mode
//   if (document.documentElement && document.documentElement.scrollTop)
//       return document.documentElement.scrollTop;
//   // Internet Explorer 6, 7 and 8
//   if (document.body.scrollTop) return document.body.scrollTop;
//   return 0;
// }

// function elmYPosition(eID) {
//   var elm = document.getElementById(eID);
//   var y = elm.offsetTop;
//   var node = elm;
//   while (node.offsetParent && node.offsetParent != document.body) {
//       node = node.offsetParent;
//       y += node.offsetTop;
//   } return y;
// }
// function smoothScroll(eID) {
//   var offset = 0 //66
//   var startY = currentYPosition();
//   var stopY = elmYPosition(eID)-offset;
//   var distance = stopY > startY ? stopY - startY : startY - stopY;
//   if (distance < 100) {
//       scrollTo(0, stopY); return;
//   }
//   var speed = Math.round(distance / 100);
//   if (speed >= 20) speed = 20;
//   var step = Math.round(distance / 25);
//   var leapY = stopY > startY ? startY + step : startY - step;
//   var timer = 0;
//   if (stopY > startY) {
//       for ( var i=startY; i<stopY; i+=step ) {
//           setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//           leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//       } return;
//   }
//   for ( var i=startY; i>stopY; i-=step ) {
//       setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//       leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//   }
//   return false;
// }


























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
 
   
  // ====== get % of # between min & max of a given range ========= //
  // E.G. from 35 to 356, what percentage (of the range) is 121? 
  function getPercentOfRange(min, current, max) {  
    // change *1 to *100 for whole numbers
    // currently returning opacity 0.1 - 1.0
    return percentage = (((current - min) * 1) / (max - min)) //.toFixed(1);  
  } 




































//   $("#nav li, li.work ul").each(function(big_e){
//     // function over each li, 
//     $(this).hover(function(little_e){
//       let current_tag = this.tagName  
  
//       console.log(`%c=> current_tag: `, "color:cyan", current_tag);
  
//       $(".cursor_braces").show();
//       $(".cursor_main").hide();
//       $(".cursor_caret").hide();
//       return current_tag
//     }, function(current_tag){
//       console.log(`%c=> current_tag.relatedTarget.tagName: `, "color:cyan", current_tag.relatedTarget.tagName);
//       // if you exit and land on the parent UL...
//       if (current_tag.relatedTarget.tagName === "UL") {
//         console.log("Aborting mission.... moving on as if nothign happened")
        
// // here is where it should be an if statement instead of a function/function. 
// // IN this case it needs to repeat itself
// // ergo, this needs to recombine with the function above?!?!?!
//       return 
//     } else if (current_tag.relatedTarget.tagName === "LI") {
//         $(".cursor_braces").hide();
//         $(".cursor_main").show();
//         $(".cursor_caret").hide();  // it looks kind of nice with this on...
//       } else if (current_tag.relatedTarget.tagName === "DIV") {
//         $(".cursor_braces").hide();
//         $(".cursor_main").show();
//         $(".cursor_caret").hide();  // it looks kind of nice with this on...
//       }

//     });
//   });


















} // end window load

  