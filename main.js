$(document).ready(() => {
  $(".bg").height($(window).height());

  $("a.btn-scroll-down").click(() => {
    $("html,body").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
});
