!function(o){"use strict";o(window).load(function(){o(".preloader").fadeOut(1e3)}),o(".navbar-collapse a").on("click",function(){o(".navbar-collapse").collapse("hide")}),o(window).scroll(function(){50<o(".navbar").offset().top?o(".navbar-fixed-top").addClass("top-nav-collapse"):o(".navbar-fixed-top").removeClass("top-nav-collapse")}),o(".home-slider").owlCarousel({animateOut:"fadeOut",items:1,loop:!0,dots:!1,autoplayHoverPause:!1,autoplay:!0,smartSpeed:1e3}),o(".owl-courses").owlCarousel({animateOut:"fadeOut",loop:!0,autoplayHoverPause:!1,autoplay:!0,smartSpeed:1e3,dots:!1,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsiveClass:!0,responsive:{0:{items:1},1e3:{items:3}}}),o(".owl-client").owlCarousel({animateOut:"fadeOut",loop:!0,autoplayHoverPause:!1,autoplay:!0,smartSpeed:1e3,responsiveClass:!0,responsive:{0:{items:1},1e3:{items:3}}}),o(function(){o(".custom-navbar a, #home a").on("click",function(a){var e=o(this);o("html, body").stop().animate({scrollTop:o(e.attr("href")).offset().top-49},1e3),a.preventDefault()})})}(jQuery);