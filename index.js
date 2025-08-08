var rotated = false;

$(".sidebar-toggle").click(function () {
  $("#sidebar").toggleClass("my-sidebar-content collapsed-sidebar");
  if (!rotated) {
    $(".sidebar-toggle").css("transform", "rotate(180deg)");
    rotated = true;
  } else {
    $(".sidebar-toggle").css("transform", "rotate(0deg)");
    rotated = false;
  }
});
