
window.onload = function() { 

// for layout purposes only, hiddeen by default in the css
// $("#centerlines").show()

  // ==========   C U R S O R S   ================ // 
const cursor = document.querySelector('.cursor_container');
const main_cursor = document.querySelector('.cursor_main');
const cursors = document.getElementsByClassName('custom_cursor');
// get actual computed width and devide instead of this, it's hacky 
const y_offset = 40 // 35  half thw width
const x_offset = 40 // 15  half the height
// initially hide all custom cursors
// do this in CSS before deployment
$(cursors).hide()


// does user have dark mode enabled?
let darkmode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// set initial theme accordingly
changeTheme(darkmode)



// ============== D A R K  M O D E ================ //
// ============== D A R K  M O D E ================ //
// ============== D A R K  M O D E ================ //
$("#landing").click(function(e){
darkmode = !darkmode
changeTheme(darkmode)
console.log("dark mode clicked and changed to ",darkmode) // Result: True or False
});

function changeTheme(darkmode) {
  console.log(`%c=> changeTheme darkmode inside function is: `, "color:cyan", darkmode);
  // $("html").attr("dark", "true" )
    if ( darkmode != true) {
      $("html").attr("dark", "true" )
      $("#nav_wrapper").removeClass("hard_black_shadow" ) 
      $("#nav_wrapper").addClass("in-your-face-shadow") 
    } else {
      $("html").attr("dark", "false" )
      $("#nav_wrapper").addClass("hard_black_shadow" ) 
      $("#nav_wrapper").removeClass("in-your-face-shadow")
    }
}












// ============ initial logo animation ============== //
// ============ initial logo animation ============== //
// ============ initial logo animation ============== //

// Unwind some logo elements out of position
$("#text_banner_darin").css({"transform": "rotate(-30deg)", "transition": "0.1s" })
$("#text_banner_murray").css({"transform": "rotate(-40deg)", "transition": "0.1s" })
$("#lightening_bolt_layer, #needle_layer").css({"transform": "rotate(0deg)", "transition": "0.1s", "transform": "scale(0.7)" })

// Now, animate them into position after a slight delay
setTimeout(() => {
  $("#text_banner_darin").css({"transform": "rotate(0deg)", "transition": "1.1s" })  
  $("#text_banner_murray").css({"transform": "rotate(0deg)", "transition": "2.1s" }) 
  $("#lightening_bolt_layer, #needle_layer").css({ "transform": "rotate(90deg)", 
    "transform": "scale(0.9)", 
    "transition": "4.5s", 
    "opacity": "1.0" // was 0.4
  }) 
  $(".glint").css({"animation-name": "spin" })

}, 200);







// ======== Clone & Insert Badges ========= //
// ========    ( work samples)    ========= //
// ======== ===================== ========= //
// replace image with SVG/image/text
$('.card').each(function(index) {
  let card_name = $(this).attr('data-name')
  let image_name = $(this).attr('data-image')
  // clone the repeatable element
  var clone = $("#svg_badge_master").clone();
  // create a new unique ID
  var newId = clone.attr("id")+(card_name);
  // apply the new ID to the clone
  clone.attr("id", newId); //.removeAttr("style");
    // INSIDE the clone, insert the appropriate image 
    clone.find("tspan").text( card_name );
    clone.find(".badge_category_image").attr( "xlink:href", "/images/cards/" + image_name + ".JPG" );  
  // $("#display_board_X").append(clone) // add to the DOM
  $(this).find(".category_badge").html( clone );
});  











// ===============   M A I N   ================ // 
// ===============    N A V    ================ // 
// ===============   (ofset)  ================ // 
// can this be done with CSS calc?
let nav_width = $("#nav_floater").outerWidth();
// let screen_width = $("body").outerWidth();
let floating_logo_width = $("#floating_logo").outerWidth();
let nav_left_width = $("#nav_left").outerWidth();
let nav_right_width = $("#nav_right").outerWidth();
let nav_offest = Math.floor(Math.abs(nav_left_width - nav_right_width) )  ;  // "-10" is visual adjustment

$("#nav_wrapper").css('margin-left', (nav_offest)+"px");
$("#nav_center").css('width', floating_logo_width+"px");
// make this happen AFTER logo is covering it
// $("#nav_center li a ").css('color', "black");


// ===============   M A I N   ================ // 
// ===============    N A V    ================ // 
// ===============   (toggle)  ================ //  
  // var isVisible = document.getElementById("yourID").style.display == "block";
  // var isHidden = document.getElementById("yourID").style.display == "none"; 
hiddenElements = $(':hidden');
visibleElements = $(':visible'); //if(!$('#yourID').is(':visible')) { }



// ===============    S U B    ================ // 
// ===============    N A V    ================ // 
// ===============   (toggle)  ================ //  
let work_menu = $(".sub_nav"); 
$(work_menu).hide();

$("li.work").hover(function(e){
    console.log(`%c=> showing the sub-menu `, "color:gray");
    $(work_menu).fadeIn();
}, function(){
    console.log(`%c=> hiding the sub-menu `, "color:gray");
    $(work_menu).fadeOut();
    // why does this need to be here? t should be in the .each.hover function below...
    // at least make it address 'any' cursor which is active
    $(".cursor_braces").css( "transform", "rotate(90deg)" );
});



// ==========   C A R O U S E L   ============= //
// ==========      open/close     ============= //
// ==========      (buttons)      ============= //
// const carousel_panels = $(".carousel_panel")
$(document).on("click", ".show_carousel" , function(e) {   
  e.preventDefault()
  let show_this = e.currentTarget.attributes.href.value
  $("#nav_floater, #home_button").css({"opacity":"0.2", "pointer-events":"none" });
  $(show_this).removeClass("fade_out").addClass("fade_in");
});

$(document).on("click", ".close_carousel" , function(e) {   
  $(".carousel_panel").removeClass("fade_in").addClass("fade_out"); //.hide()
  $("#nav_floater, #home_button").css({"opacity":"1", "pointer-events":"auto" });
});




// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 
// ==========   C U R S O R S   ================ // 

document.addEventListener('mousemove', (e)=> {
    cursor.setAttribute("style", "top: "+(e.pageY-y_offset)+"px; left: "+(e.pageX-x_offset)+"px")
})

$(".cursor_main").show();
document.addEventListener('click', () => {
  main_cursor.classList.add("expand");
  console.log(`%c=> cursor: `, "color:cyan", main_cursor);
  console.log(`%c=> cursor: `, "color:cyan", main_cursor.classList);
  setTimeout(() => {
    main_cursor.classList.remove("expand");
  }, 500)
})


// ==========   C U R S O R  C H A N G E S    ================ // 
// ==========   C U R S O R  C H A N G E S    ================ // 
// ==========   C U R S O R  C H A N G E S    ================ // 

// ==== Change determined by data-cursor attribute, if asigned
// make it observe everything? Global? If assigned, if not: ignore

// took out 'a' from below list
$(".close_carousel, #nav_wrapper, .card_wrapper a, .js-carousel-button,  form *").each(function(main_event){
  $(this).hover(function(sub_event){
    cursor_choice = $(this).attr("data-cursor")
        console.log(`%c=> cursor_choice: `, "color:cyan", cursor_choice);
    $(cursors).hide()
    $("."+cursor_choice).show();
  }, function(){
    $("."+cursor_choice).hide()
    $(".cursor_main").show();
  });
});


// ==========   C U R S O R - circle   ================ // 
// ==========   C U R S O R -  over    ================ // 
// ==========   C U R S O R - icons    ================ // 

let default_cursor_size = 48
let default_cursor_border = 8

$(".icon").each(function(main_event){
  $(this).hover(function(sub_event){
    let factor = 2
    let this_width = $(this).width()*factor
    let this_height = $(this).height()*factor
    let avg = Math.min( this_width, this_height )
    $(".cursor_main").stop().animate({width: avg+"px", height: avg+"px", "border-width": "1px"})
  }, function(){
    $(".cursor_main").stop().animate({width: default_cursor_size+"px", height: default_cursor_size+"px", "border-width": default_cursor_border+"px"})
  });
});

// =======   C U R S O R - (color for 'about me' page) =========== //
// nice to see the change, but really not needed
// $("#about_me").hover(function(e){
//     $(".cursor_main").css("border-color" , "#ffffff");
//   }, function(){
//     $(".cursor_main").css("border-color" , "#44ffee");
//   });

// ==========   C U R S O R - D Y N A M I C S    ================ // 
// ==========   C U R S O R - D Y N A M I C S    ================ // 
// ==========   C U R S O R - D Y N A M I C S    ================ // 

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

    // get the supplied elements height and width 
    function getHeightAndWidth(element) {
      var style = window.getComputedStyle(element, null);
          var h = style.height;
          var w = style.width;
          var c = style.blockSize;
          return {height:h, width:w}
      }

      







// ==========       B A D G E  (svg)      ================
// ==========   ( image zoom on hover )   ================
// ==========   B A D G E  (svg)  hover   ================
$("li svg").each(function(index, main_event ){
  // get the LI this SVG is representing
  let this_card = this.parentElement.offsetParent.offsetParent.parentElement
  // assign it a unique ID as it does not have one
  $(this_card).attr("id", "card_"+index);
  let badge_image = this.querySelector('.badge_category_image') 

      $(this).hover(function(sub_event){
        $(badge_image).addClass("badge_zoom")
        // dim all otehr elements on the page:
        // $('li.card, #nav_floater, h1, #lion_logo_svg').not('#'+this_card.id+"*").addClass("dim_all")
      }, function(){
        $(badge_image).removeClass("badge_zoom")
        // un-dim all elements
        //$("body *").removeClass("dim_all")
      });
});


 













// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 
// ==========   S H R I N K I N G  L O G O    ================ // 

// this is the working FROM version
// gsap.fromTo("#floating_logo", { y: "0px", scale: 0}, {duration: 1 , delay: 2, y: "50vh", ease: "power1.in", scale: 5} )
// gsap.from("#floating_logo", {duration: 1 , delay: 2, y: "50vh", ease: "power1.in", scale: 5} )
// find the proportion of the screen. 
// screen_width screen_height

// hwich is smaller, height or width. 
// if width, proportion to width
// if height, proportion to height     starting size is 100 pixels

// width range is 375 to 1200. 
// 375 = 2.5 - - - 1200 = 7 
let viewPortHeight = window.innerHeight
let viewPortWidth = window.innerWidth
let dictator = Math.min(viewPortWidth, viewPortHeight )
if (dictator = viewPortHeight) { dictator *=0.6 }
responsive_factor = dictator/150


let scale_calc = responsive_factor//  // min 2, max 7
// gsap.from("#floating_logo",  {    lion_logo_svg
gsap.from("#lion_logo_svg",  {
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
  // scale: scale_calc
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













} // end window load

  