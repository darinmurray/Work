window.onload = function () {
  // $("#centerlines").show()

  // start by scrolling to home if reloaded
  history.scrollRestoration = "manual";

  // ==========   C U R S O R S   ================ //
  const cursor = document.querySelector(".cursor_container");
  const main_cursor = document.querySelector(".cursor_main");
  const cursors = document.getElementsByClassName("custom_cursor");
  // get actual computed width and devide instead of this, it's hacky
  const y_offset = 40; // 35  half thw width
  const x_offset = 40; // 15  half the height

  // ==========  contact form  ========== //
  let first_num = Math.floor(Math.random() * 10);
  let second_num = Math.floor(Math.random() * 10);
  let first_plus_second = first_num + second_num;
  $(".spam_block_label").html(first_num + " + " + second_num + " =");
  let spam_input = document.getElementById("entry.1735736871");
  let name_input = document.getElementById("entry.2005620554");
  let email_input = document.getElementById("entry.1055881764");
  let email_confirm_input = document.getElementById("email_confirmation_input");
  let message_input = document.getElementById("entry.839337160");
  let human = false;
  let has_name = false;
  let has_email = false;
  let has_message = false;
  const email_submit = document.getElementById("contact_submit");
  email_submit.disabled = true;

  // ============  L O G O  A N I M A T I O N  ============== //
  // ============  L O G O  A N I M A T I O N  ============== //
  // ============  L O G O  A N I M A T I O N  ============== //

  // Unwind some logo elements out of position
  $("#text_banner_darin").css({
    transform: "rotate(-30deg)",
    transition: "0.1s",
  });
  $("#text_banner_murray").css({
    transform: "rotate(-40deg)",
    transition: "0.1s",
  });
  $("#lightening_bolt_layer, #needle_layer").css({
    transform: "rotate(0deg)",
    transition: "0.1s",
    transform: "scale(0.7)",
  });

  // Now, animate them into position after a slight delay
  setTimeout(() => {
    $("#text_banner_darin").css({
      transform: "rotate(0deg)",
      transition: "1.1s",
    });
    $("#text_banner_murray").css({
      transform: "rotate(0deg)",
      transition: "2.1s",
    });
    $("#lightening_bolt_layer, #needle_layer").css({
      transform: "rotate(90deg)",
      transform: "scale(0.9)",
      transition: "4.5s",
      opacity: "1.0", // was 0.4
    });
    $(".glint").css({ "animation-name": "spin" });
  }, 200);

  // ======== Clone & Insert Badges ========= //
  // ========    ( work samples)    ========= //
  // ======== ===================== ========= //
  // replace HTML image with SVG/image/text
  $(".card").each(function (index) {
    let card_name = $(this).attr("data-name");
    let image_name = $(this).attr("data-image");
    // clone the repeatable element
    var clone = $("#svg_badge_master").clone();
    // create a new unique ID
    var newId = clone.attr("id") + card_name;
    // apply the new ID to the clone
    clone.attr("id", newId); //.removeAttr("style");
    // INSIDE the clone, insert the appropriate image
    clone.find("tspan").text(card_name);
    clone
      .find(".badge_category_image")
      .attr("xlink:href", "/images/cards/" + image_name + ".jpg");
    // $("#display_board_X").append(clone) // add to the DOM
    $(this).find(".category_badge").html(clone);
  });

  // ========       B A D G E  (svg)      ========= //
  // ========   ( image zoom on hover )   ========= //
  // ========   B A D G E  (svg)  hover   ========= //
  $("li svg").each(function (index, main_event) {
    // get the LI this SVG is representing
    let this_card = this.parentElement.offsetParent.offsetParent.parentElement;
    // assign it a unique ID as it does not have one
    $(this_card).attr("id", "card_" + index);
    let badge_image = this.querySelector(".badge_category_image");
    $(this).hover(
      function (sub_event) {
        $(badge_image).addClass("badge_zoom");
      },
      function () {
        $(badge_image).removeClass("badge_zoom");
      }
    );
  });

  // ===============   M A I N   ================ //
  // ===============    N A V    ================ //
  // ===============   (ofset)  ================ //
  // can this be done with CSS calc?
  let nav_width = $("#nav_floater").outerWidth();
  let floating_logo_width = $("#floating_logo").outerWidth();
  let nav_left_width = $("#nav_left").outerWidth();
  let nav_right_width = $("#nav_right").outerWidth();
  let nav_offest = Math.floor(Math.abs(nav_left_width - nav_right_width)); // "-10" is visual adjustment

  $("#nav_wrapper").css("margin-left", nav_offest + "px");
  $("#nav_center").css("width", floating_logo_width + "px");

  // ===============   M A I N   ================ //
  // ===============    N A V    ================ //
  // ===============   (toggle)  ================ //
  // var isVisible = document.getElementById("yourID").style.display == "block";
  // var isHidden = document.getElementById("yourID").style.display == "none";
  hiddenElements = $(":hidden");
  visibleElements = $(":visible"); //if(!$('#yourID').is(':visible')) { }

  // ===============    S U B    ================ //
  // ===============    N A V    ================ //
  // ===============   (toggle)  ================ //
  let nav = $(".nav");
  let sub_nav = $(".sub_nav");

  $("li.mode").hover(
    function (e) {
      $(sub_nav).fadeIn();
    },
    function () {
      $(sub_nav).fadeOut();
      // why does this need to be here? t should be in the .each.hover function below...
      // at least make it address 'any' cursor which is active
      $(".cursor_main").css("transform", "rotate(0deg)");
      $(".cursor_main").css("width", default_cursor_size + "px");
    }
  );

  // ==========    C O N T A C T    ================ //
  // ==========       F O R M       ================ //
  // ==========     (submitted)     ================ //

  // ==> Activete inviting cursor when hovering near inputs
  $(".input_active_area").hover(
    function (e) {
      $(this).find("span.caret").addClass("blink");
      $(this)
        .find(".input_wrapper")
        .css("border-bottom", "2px solid rgba(245,245,245,0.9)");
    },
    function () {
      $(this).find("span.caret").removeClass("blink");
      $(this)
        .find(".input_wrapper")
        .css("border-bottom", "2px solid rgba(245,245,245,1)");
    }
  );

  // ==> Hide inviting cursor on focus
  function onMouseUp(e) {
    const activeTextarea = document.activeElement;
    $("span.caret").removeClass("blink");
  }
  // ==> mouse up event listener
  document.addEventListener("mouseup", onMouseUp, false);

  // ******* Change this to a better effect  ******* //
  $("#gform").on("submit", function (e) {
    $("#gform *").fadeOut(2000);
    $("#contact *").fadeOut(2000);
    $("#gform").append("Thank you!");
  });

  // listen to spam_block_imput and enact submit when filled in
  document.querySelectorAll(".contact").forEach((input) => {
    input.addEventListener("input", function (e) {
      if (spam_input.value == first_plus_second) {
        // spam checker
        human = true;
        spam_input.previousElementSibling.previousElementSibling.previousElementSibling.style.color =
          "limeGreen";
      } else {
        human = false;
      }

      if (name_input.value != "") {
        // name
        has_name = true;
        name_input.previousElementSibling.previousElementSibling.style.color =
          "limeGreen";
      } else {
        has_name = false;
        name_input.previousElementSibling.previousElementSibling.style.color =
          "red";
      }

      if (
        email_input.value != "" &&
        email_input.value.match(/^\S+@\S+\.\S+$/)
      ) {
        // email
        has_email = true;
        email_input.previousElementSibling.previousElementSibling.style.color =
          "limeGreen";
      } else {
        has_email = false;
        email_input.previousElementSibling.previousElementSibling.style.color =
          "red";
      }

      if (message_input.value != "") {
        // message
        has_message = true;
        message_input.previousElementSibling.previousElementSibling.style.color =
          "limeGreen";
      } else {
        has_message = false;
        message_input.previousElementSibling.previousElementSibling.style.color =
          "red";
      }

      if (human && has_name && has_email && has_message) {
        email_submit.style.opacity = "1";
        email_submit.disabled = false;
      } else {
        email_submit.style.opacity = "0.2";
        email_submit.disabled = true;
      }
    });
  });

  // ==========      M O D E      ================ //
  // ==========    S W I T C H    ================ //
  // ==========    (spotlight)    ================ //
  $(".color_mode").click(function (e) {
    chosen_mode = e.target.dataset.color_mode;
    $("html").attr("theme", chosen_mode);
    goNinja(chosen_mode);
  });

  // ==========   S T E A L T H   ================ //
  // ==========     M O D E       ================ //
  // ==========    (spotlight)    ================ //
  const spotlight = document.querySelector(".spotlight");
  let spotlightSize = "transparent 180px, rgba(0, 0, 0, 0.9) 200px)";

  function goNinja(chosen_mode) {
    if (chosen_mode == "ninja") {
      $(spotlight).show();
      window.addEventListener("mousemove", (e) => updateSpotlight(e));
      function updateSpotlight(e) {
        let top_offset = window.pageYOffset;
        spotlight.style.backgroundImage = `radial-gradient(circle at ${
          e.pageX
        }px ${e.pageY - top_offset}px, ${spotlightSize}`;
      }
    } else {
      $(spotlight).hide();
    }
  } // end function

  // ==========   C U R S O R S   ================ //
  // ==========   C U R S O R S   ================ //
  // ==========   C U R S O R S   ================ //
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " +
        (e.pageY - y_offset) +
        "px; left: " +
        (e.pageX - x_offset) +
        "px"
    );
  });

  document.addEventListener("click", () => {
    main_cursor.classList.add("expand");
    setTimeout(() => {
      main_cursor.classList.remove("expand");
    }, 500);
  });

  // ==========   C U R S O R  C H A N G E S    ================ //
  // ==========   C U R S O R  C H A N G E S    ================ //
  // ==========   C U R S O R  C H A N G E S    ================ //
  // ==== Change determined by data_cursor attribute, if asigned
  // $(".close_carousel, #nav_wrapper, .card_wrapper a, .js-carousel-button,  form *").each(function(main_event){
  $(".close_carousel, .card_wrapper a, .js-carousel-button,  form *").each(
    function (main_event) {
      $(this).hover(
        function (sub_event) {
          cursor_choice = $(this).attr("data-cursor");
          $(cursors).hide();
          $("." + cursor_choice).show();
        },
        function () {
          $("." + cursor_choice).hide();
          $(".cursor_main").show();
        }
      );
    }
  );

  // ==========       C U R S O R        ================ //
  // ==========   (circle over icons)    ================ //
  let default_cursor_size = 48;
  let default_cursor_border = 8;

  $(".icon").each(function (main_event) {
    $(this).hover(
      function (sub_event) {
        let factor = 2;
        let this_width = $(this).width() * factor;
        let this_height = $(this).height() * factor;
        let avg = Math.min(this_width, this_height);
        $(".cursor_main")
          .stop()
          .animate({
            width: avg + "px",
            height: avg + "px",
            "border-width": "1px",
          });
      },
      function () {
        $(".cursor_main")
          .stop()
          .animate({
            width: default_cursor_size + "px",
            height: default_cursor_size + "px",
            "border-width": default_cursor_border + "px",
          });
      }
    );
  });

  // ==========   C U R S O R - R O T A T I O N    ================ //
  // ==========   C U R S O R - R O T A T I O N    ================ //
  // change the ROTATION on the cursor in the SUB-MENU
  // This could be over ONLY "#sub_nav li", NOT "#nav li" as there are no angles in #nav
  // $(sub_nav).children('li').each(function(big_e){
  $(".sub_nav li").each(function (e) {
    $(this).hover(function (calc_angle) {
      let current_target = calc_angle.currentTarget;
      let target_width = calc_angle.currentTarget.offsetWidth;
      new_angle = getRotation(current_target);
      $(".cursor_main").css("transform", "rotate(" + new_angle + "deg)");
      $(".cursor_main").css("width", target_width + "px");
    });
  });

  $(".nav li:not(.color_mode)").each(function (e) {
    $(this).hover(
      function (event) {
        let target_width = event.currentTarget.offsetWidth * 1.5;
        $(".cursor_main").css("width", target_width + "px");
      },
      function () {
        $(".cursor_main").css("width", default_cursor_size + "px");
      }
    );
  });

  // slow fade/up of discipline icons
  const icons = gsap.utils.toArray("li:not(.card, .main_nav)");
  icons.forEach((icon, i) => {
    const anim = gsap.fromTo(
      icon,
      { autoAlpha: 0, y: 50 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    ScrollTrigger.create({
      trigger: icon,
      animation: anim,
      toggleActions: "play none none none",
      once: true,
    });
  });

  function getRotation(element) {
    // calcualtes the current rotation of a provided element (HTML object) and returns the angle (angle or 0)
    // from :  https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    // var el = this // document.getElementById( el_id );
    var st = window.getComputedStyle(element, null);
    var tr =
      st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      "fail...";
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    // console.log('Matrix: ' + tr);
    if (tr != "none") {
      // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
      var values = tr.split("(")[1];
      values = values.split(")")[0];
      values = values.split(",");
      var a = values[0];
      var b = values[1];
      var c = values[2];
      var d = values[3];
      var scale = Math.sqrt(a * a + b * b);
      // arc sin, convert from radians to degrees, round
      // DO NOT USE: see update below
      var sin = b / scale;
      // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      console.log(`%c=> angle: `, "color:cyan", angle);
      return angle; //= null ?? 0;
    }
    return 0;
  }

  // ===========  C A R O U S E L  =========== //
  // ===========      simple       =========== //
  // ===========  fading carousel  =========== //

  // collect all carousels, give each a unique ID
  // same for each slide
  $(".carousel_container").each(function (index, container) {
    container.id = $(container).attr("data-name") + "_carousel";
    let mySlides = $(container).find(".carousel__item ");
    $(mySlides).each(function (index) {
      this.id = "slide_" + index;
    });
  });
  function switchSlides(selected_carousel) {
    let theseSlides = $(selected_carousel).find(".carousel__item ");
    let current_slide = $(selected_carousel).find(".showing")[0];
    let next_slide = current_slide.nextElementSibling ?? theseSlides[0];
    let prev_slide =
      current_slide.previousElementSibling ??
      theseSlides[theseSlides.length - 1];
    return [current_slide, prev_slide, next_slide];
  }
  // =========     C A R O U S E L     ============ //
  // =========   open/close (buttons)  ============ //
  $(document).on("click", ".show_carousel", function (e) {
    e.preventDefault();
    let show_this = e.currentTarget.attributes.href.value;
    $("#nav_floater, #home_button").css({
      opacity: "0.2",
      "pointer-events": "none",
    });
    $(show_this).removeClass("fade_out").addClass("fade_in");
  });

  $(document).on("click", ".close_carousel", function (e) {
    $(".carousel_panel").removeClass("fade_in").addClass("fade_out");
    $("#nav_floater, #home_button").css({
      opacity: "1",
      "pointer-events": "auto",
    });
  });
  // ===========  C A R O U S E L  =========== //
  // ===========   L/R (buttons)   =========== //
  // jQuery because it's shorter and far more simple
  $(document).on("click", ".js-carousel-button ", function (e) {
    let this_butons_direction = e.target.parentElement.dataset.direction;
    let this_butons_carousel =
      e.target.parentElement.parentElement.parentElement;
    let [current_slide, prev_slide, next_slide] =
      switchSlides(this_butons_carousel);

    $(current_slide).removeClass("showing");
    if (this_butons_direction == "previous") {
      $(prev_slide).addClass("showing");
    } else {
      $(next_slide).addClass("showing");
    }
  });

  // ==========   S M O O T H  S C R O L L I N G   ================ //
  // ==========          ( for nav links )         ================ //
  // ==========                                    ================ //
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  document.querySelectorAll(".anchor").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      let targetElem = document.querySelector(e.target.getAttribute("href")),
        y = targetElem;
      // if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      // 	let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
      // 		totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      // 	y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
      // }
      gsap.to(window, {
        scrollTo: {
          y: y,
          autoKill: false,
        },
        duration: 1,
      });
    });
  });

  // ==========   S H R I N K I N G  L O G O   ================ //
  // ==========    (shrink and park - on )     ================ //
  // ==========     (nav bar - on scroll)      ================ //
  let scale_dictator = Math.min(window.innerWidth, window.innerHeight);
  if ((scale_dictator = window.innerHeight)) {
    scale_dictator *= 0.7;
  }
  //let scale_calc = scale_dictator//  // min 2, max 7
  TweenMax.set("#lion_logo_svg", { transformOrigin: "50% 0%" });
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({ paused: true });
  // ==> find the appropriate scale factor to always shrink dynamic logo to 100px
  const bigLogo = document.querySelector("#lion_logo_svg");
  const rendered_height = bigLogo.clientHeight;
  const target_height = 100; //px, ideal pixel width of final logo
  let scale_target = target_height / rendered_height;

  tl.to(bigLogo, {
    scale: scale_target,
    top: 16,
    // duration: 5.0, // scroll triggered
    ease: "linear", //circ.in",
    force3D: false,
  });
  // tl.reverse(1.0);
  var timeout = gsap.delayedCall(0, function () {
    ScrollTrigger.create({
      trigger: "#landing",
      toggleActions: "play none reverse none",
      // markers: true,
      start: "top top",
      // start: "0 0%", // was "0 15%", caused initial shrink?
      // end: " 100% 0%",
      end: "bottom 10%",
      scrub: true, //true, //1,
      strictUnits: true,
      animation: tl,
    });
  });

  // ==========   H E A D L I N E  T E X T    ================ //
  // ==========     ( expand on entry )       ================ //
  // ==========                               ================ //
  // var tl = gsap.timeline( { defaults:{ duration: 1.0, ease: Back.easeOut.config(2), opacity: 0 }})
  var tl_2 = gsap.timeline({ defaults: { duration: 0.5, opacity: 0 } });
  tl_2.from(".intro_text", {
    delay: 1,
    scale: 0.2,
    transformOrigin: "bottom",
    stagger: 0.2,
  }); //, "=.2"

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

  // ===============  U T I L I T Y  ================ //
  // ===============   (functionS)   ================ //
  // ===============   ==========    ================ //

  // ==========   Generate a Random Alpha Character   ============= //
  randoAlpha = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  // =======   Generate a Random Int between min & max   ========== //
  // getRandomInt(1, 10)*100   for increments less than one second
  function getRandomInt(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  // ====== get % of # between min & max of a given range ========= //
  // E.G. from 35 to 356, what percentage (of the range) is 121?
  function getPercentOfRange(min, current, max) {
    // change *1 to *100 for whole numbers
    // currently returning opacity 0.1 - 1.0
    return (percentage = ((current - min) * 1) / (max - min)); //.toFixed(1);
  }

  // get the supplied elements height and width
  function getHeightAndWidth(element) {
    var style = window.getComputedStyle(element, null);
    var h = style.height;
    var w = style.width;
    var c = style.blockSize;
    return { height: h, width: w };
  }
}; // end window load
