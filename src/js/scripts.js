import $ from "jquery";

$(document).ready(function() {
  $(".header").click(function (event) {
    event.preventDefault();
    $(".story").toggle("slow");
  });
});
