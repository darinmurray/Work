
// Fired when document is ready, wrapps everything  
window.onload = function() { 
 
  

    




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
  // event.originalTarget.parentElement.previousElementSibling.style.opacity=negNum; 
  // event.originalTarget.parentElement.nextElementSibling.style.opacity=posNum; 
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
 
 
} // end window load

  