$(function () {
  $(".bg").height($(window).height());

  $("a.btn-scroll-down").on("click", () => {
    $("html,body").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
});
