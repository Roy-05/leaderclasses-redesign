$(function () {
  $(".bg").height($(window).height());

  $("a.btn-scroll-down").on("click", () => {
    $("html,body").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
});

/**********************Scroll Animation START ************************************/
$(function () {
  let $animation_elements = $(".anim");
  let $window = $(window);

  function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      let $element = $(this);
      let element_height = $element.outerHeight();
      let element_top_position = $element.offset().top;
      let element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("animated");
      } else {
        $element.removeClass("animated");
      }
    });
  }

  $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll");
});
/**********************Scroll Animation "END"************************************/

/**********************Change color of center aligned animated content small Circle  "START"************************************/
$(function () {
  $(" .debits").hover(
    function () {
      $(" .center-right").css("background-color", "#4997cd");
    },
    function () {
      $(" .center-right").css("background-color", "#fff");
    }
  );
});

$(function () {
  $(".credits").hover(
    function () {
      $(".center-left").css("background-color", "#4997cd");
    },
    function () {
      $(".center-left").css("background-color", "#fff");
    }
  );
});
/**********************Change color of center aligned animated content small Circle  "END"************************************/
