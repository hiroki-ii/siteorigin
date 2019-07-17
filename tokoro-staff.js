$(function () {


    jQuery.easing.quart = function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

    $(".staff").hover(
        function () {
            $(this).find(".text-contents").addClass("active");
        },
        function () {
            $(this).find(".text-contents").removeClass("active");
        })

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

    $('#form').submit(function () {
        var selectItem = $('#select-form').val();
        var textItem = $('#text-form').val();
        if (textItem == '') {
            $('#error-message').text('理由を記入してください');
        } else {
            $('#error-message').text('');
        }
        $('#output-select').text(selectItem);
        $('#output-text').text(textItem);
        return false;
    });

    $('.option-btn').click(function () {
        var optionText = $(this).text();
        // 変数clickedOptionに、クリックした要素のdata-optionの値を代入してください。
        var clickedOption = $(this).attr("data-option");

        $('#text-form').val(optionText + 'が好きな理由は、');
        // 変数clickedOptionを用いて、「#select-form」の値を自動で入力してください。
        $("#select-form").val(clickedOption);

    });

    AOS.init();

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