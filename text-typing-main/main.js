if (typeof $pdj == "undefined") {
  var $pdj = jQuery.noConflict();
}
if (!image_urls) {
  var image_urls = Array();
}
if (!flash_urls) {
  var flash_urls = Array();
}
image_urls["corazon"] = "heart.png";
$pdj(document).ready(function () {
  var c = $pdj(window).width();
  var d = $pdj(window).height();
  var e = function (a, b) {
    return Math.round(a + Math.random() * (b - a));
  };
  var f = function (a) {
    setTimeout(function () {
      a.css({
        left: e(0, c) + "px",
        top: "-30px",
        display: "block",
        opacity: "0." + e(10, 100),
      }).animate({ top: d - 10 + "px" }, e(8500, 10000), function () {
        $pdj(this).fadeOut("slow", function () {
          f(a);
        });
      });
    }, e(1, 9000));
  };
  $pdj("<div></div>")
    .attr("id", "corazonDiv")
    .css({
      position: "fixed",
      width: c - 20 + "px",
      height: "1px",
      left: "0px",
      top: "-5px",
      display: "block",
    })
    .appendTo("body");
  for (var i = 1; i <= 15; i++) {
    var g = $pdj("<img/>")
      .attr("src", image_urls["corazon"])
      .css({
        "position": "absolute",
        "left": e(0, c) + "px",
        "top": "-30px",
        "display": "block",
        "opacity": "0." + e(10, 100),
        "margin-left": 0,
      })
      .addClass("corazonDrop")
      .appendTo("#corazonDiv");
    f(g);
    g = null;
  }
  var h = 0;
  var j = 0;
  $pdj(window).resize(function () {
    c = $pdj(window).width();
    d = $pdj(window).height();
  });
});

const paragraph = document.querySelector(".show");
const text = paragraph.innerText;
let currentIndex = 0;
let reverse = false;

function typeText() {
  if (currentIndex < text.length && !reverse) {
    paragraph.innerText = text.slice(0, currentIndex + 1);
    currentIndex++;
  } else if (currentIndex >= 0 && reverse) {
    paragraph.innerText = text.slice(0, currentIndex);
    currentIndex--;
  }
  const typingSpeed = 100;
  setTimeout(typeText, typingSpeed);
}

typeText();
