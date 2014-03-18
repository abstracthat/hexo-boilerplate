/* =============================================
 *
 *   FIXED RESPONSIVE NAV
 *
 *   (c) 2014 @adtileHQ
 *   http://www.adtile.me
 *   http://twitter.com/adtilehq
 *
 *   Free to use under the MIT License.
 *
 * ============================================= */

(function () {

  "use strict";

  // Feature test to rule out some older browsers
  if ("querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {

    // Attach FastClick to remove the 300ms tap delay
    FastClick.attach(document.body);

    // Init Responsive Nav
    var navigation = responsiveNav(".main-menu", {

      // Close the navigation when it's tapped
      closeOnNavClick: true,
      navClass: ".main-menu"
    });

    // Create a Mask
    var mask = document.createElement("div");
    mask.className = "mask";

    // Append the mask inside <body>
    document.body.appendChild(mask);

    // Disable mask transitions on Android to boost performance
    if (navigator.userAgent.match(/Android/i) !== null) {
      document.documentElement.className += " android";
    }

    // Find navigation links and save a reference to them
    var nav = document.querySelector(".main-menu ul"),
      links = nav.querySelectorAll("a");

    // Highlight active link on the navigation
    var selectActiveMenuItem = function (i) {
      [].forEach.call(links, function (el, i) {
        links[i].parentNode.className = "";
      });
      links[i].parentNode.className = "active";
    };

    // Close navigation when tapping the mask under it
    mask.addEventListener("click", function (e) {
      e.preventDefault();
      navigation.close();
    }, false);
  }

})();
