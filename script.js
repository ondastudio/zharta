//splide js start
function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "40em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
        },
        767: {
          // Mobile Landscape
        },
        479: {
          // Mobile Portrait
        }
      }
    }).mount();
  }
}
slider1();

function slider2() {
  let splides = $(".slider2");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "00em", // space between slides
      arrows: false, // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: true, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "40em",
          updateOnMove: true
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          updateOnMove: true
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          updateOnMove: true
        }
      }
    }).mount();
  }
}
slider2();
//splide js end

// Â© Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others

// Stagger your animation

setTimeout(() => {
  // Put the play below this line
  $(".home1").each(function (i) {
    var $item = $(this);
    setTimeout(function () {
      $item.click();
    }, 200 * i);
    // delays the next animation by 200 milliseconds
  });
}, 200);

setTimeout(() => {
  // Put the play below this line
  $(".home2").each(function (i) {
    var $item = $(this);
    setTimeout(function () {
      $item.click();
    }, 200 * i);
    // delays the next animation by 200 milliseconds
  });
}, 600);

setTimeout(() => {
  // Put the play below this line
  $(".home3").each(function (i) {
    var $item = $(this);
    setTimeout(function () {
      $item.click();
    }, 200 * i);
    // delays the next animation by 200 milliseconds
  });
}, 1200);

setTimeout(() => {
  // Put the play below this line
  $(".home4").each(function (i) {
    var $item = $(this);
    setTimeout(function () {
      $item.click();
    }, 200 * i);
    // delays the next animation by 200 milliseconds
  });
}, 1800);

// tabs animation

$(".is--lender").on("click", function () {
  $(".is--borrower").removeClass("is--active");
  $(".is--lender").addClass("is--active");
  $(".circle--tabs-bg").addClass("is--lender");
  $(".borrow-lender-tab").addClass("is--active");
  $(".tabs-menu").addClass("is--lender");
  $(".is--tabs-wrapper").addClass("is--lender");
  $("._36width").find(".line").addClass("is--blue");
});

$(".is-borrower").on("click", function () {
  $(".is--borrower").addClass("is--active");
  $(".is--lender").removeClass("is--active");
  $(".circle--tabs-bg").removeClass("is--lender");
  $(".borrow-lender-tab").removeClass("is--active");
  $(".tabs-menu").removeClass("is--lender");
  $(".is--tabs-wrapper").removeClass("is--lender");
  $("._36width").find(".line").removeClass("is--red");
});

$(document).ready(function () {
  var prevVal;
  $("#borrow_collection").on("change", function () {
    var val = $(this).find("option:selected").val();
    $(".select-icons").removeClass(`is--${prevVal}`).addClass(`is--${val}`);
    prevVal = val;
  });
});
