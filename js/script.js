// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//  });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("show img.");
//
//   });
// });
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toogle();
  });
});
