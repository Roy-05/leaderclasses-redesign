$(function () {
  $("a.btn-scroll-down").on("click", () => {
    $("html,body").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
});

$(window).on("load", () => {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
