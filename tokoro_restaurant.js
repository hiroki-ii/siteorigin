// Write JavaScript here
$(function () {

  jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };

  $(function () {
    jQuery('.scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = jQuery(this.hash);
        $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          jQuery('html,body').animate({ scrollTop: targetOffset }, 1200, 'quart');
          return false;
        }
      }
    });
  });

  $(document).ready(function () {

    $("#theTarget").skippr();

  });

  $("#theTarget").skippr({

    transition: 'slide',
    speed: 2000,
    easing: 'easeOutQuart',
    navType: 'block',
    childrenElementType: 'div',
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 4000,
    keyboardOnAlways: true,
    hidePrevious: false

  });

  $(function () {
    $(".open").click(function () {

      $(".active").removeClass("active");
      var clickedopen = $(".open").index($(this));

      $(".slideBox").eq(clickedopen).slideToggle("slow");
    });
  });

  $(".contact-show").click(function () {
    $("#contact-modal").fadeIn();
  })

  $("#close-modal").click(function () {
    $("#contact-modal").fadeOut();
  })

  AOS.init();

  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $('#concept').offset().top) {
        $(".header-btn").css("color", "#5d5e60");
        $(".header-sns a").css("color", "#5d5e60");
        $(".menu__line").css("background", "#5d5e60");
      } else {
        $(".header-btn").css("color", "white");
        $(".header-sns a").css("color", "white");
        $(".menu__line").css("background", "white");
      }
    })
  })

  $('.menu-bar').on('click', function () {
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
  });

  $('.gnav__menu__item a').on('click', function () {
    // if (window.innerWidth <= 768) {
    $('.menu-bar').click();
    // }
  });

});
