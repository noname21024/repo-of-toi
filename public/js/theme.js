(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        var navbarToggler = $('.navbar-toggler'),
            navMenu = $('.pesco-nav-menu'),
            closeIcon = $('.navbar-close');

        navbarToggler.unbind('click').on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });

        closeIcon.unbind('click').on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });
        
        navMenu.find(".dd-trigger").unbind('click').on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(!0, !0).slideToggle(350);
            $(this).toggleClass('sub-menu-open')
        });
    };
    
    // Offcanvas Overlay
    function offCanvas(){
        // Open Cart
        $(".cart-button").unbind("click").on("click", function(e) {
            e.preventDefault();
            $(".sidemenu-wrapper-cart").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        // Close everything when clicking overlay
        $(".offcanvas__overlay").unbind('click').on('click', function (e) {
            $(".navbar-toggler").removeClass("active");
            $(".pesco-nav-menu").removeClass("menu-on");
            $(".sidemenu-wrapper-cart").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }); 

        // Close cart button
        $(".sidemenu-cart-close").unbind("click").on("click", function() {
            $(".sidemenu-wrapper-cart").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });

        // Toggle mobile menu
        $(".navbar-toggler").unbind('click').on('click', function (e) {
            $(".offcanvas__overlay").toggleClass("overlay-open");
        });
    }

    // Helper to safely init Slick
    function safeSlick(selector, config) {
        var $el = $(selector);
        if ($el.length) {
            // If it's already initialized, try to unslick it properly
            if ($el.hasClass('slick-initialized') || $el.get(0).slick) {
                try {
                    // Crucial: stop autoplay before unslicking to clear internal timers
                    $el.slick('slickSetOption', 'autoplay', false, false);
                    $el.slick('unslick');
                } catch (e) {
                    // If unslick fails, manually clear the class and state
                    $el.removeClass('slick-initialized slick-slider slick-dotted');
                }
            }
            
            // Double check if it's still in DOM and visible
            if ($el.parents('body').length) {
                $el.slick(config);
            }
        }
    }

    window.initPescoTheme = function() {
        mainMenu();
        offCanvas();

        //===== Preloader
        $('.preloader').fadeOut(500);

        //===== Sticky
        $(window).on('scroll', function(event) {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".header-navigation").removeClass("sticky");
            } else {
                $(".header-navigation").addClass("sticky");
            }
        });

        //===== Back to top
        $(window).on('scroll', function(event) {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });
        $('.back-to-top').unbind('click').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        //===== Magnific-popup js
        if ($('.video-popup').length){
            $('.video-popup').magnificPopup({
                type: 'iframe',
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        }

        if ($('.img-popup').length){
            $(".img-popup").magnificPopup({
                type: "image",
                gallery: { enabled: true }
            });
        }

        //===== Nice select js
        if ($('select').length){
            $('select').niceSelect();
        }
        
        //===== Slick sliders
        safeSlick('.hero-slider-one', {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            appendDots: $('.hero-dots'),
            autoplay: false,
            vertical: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1200, settings: { dots: false } },
                { breakpoint: 767, settings: { vertical: false } }
            ]
        });

        safeSlick('.hero-post-slider', {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            appendDots: $('.hero-dots'),
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        safeSlick('.category-slider-one', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.category-arrows'),
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]
        });

        safeSlick('.feature-slider-one', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.feature-arrows'),
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]
        });

        safeSlick('.trending-products-slider', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.trending-product-arrows'),
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1600, settings: { slidesToShow: 4 } },
                { breakpoint: 1400, settings: { slidesToShow: 3 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]
        });

        safeSlick('.today-deals-slider', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            centerMode: true,
            appendArrows: $('.today-deals-arrows'),
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1500, settings: { centerMode: false, variableWidth: true, slidesToShow: 2 } },
                { breakpoint: 1024, settings: { centerMode: false, variableWidth: true, slidesToShow: 2 } },
                { breakpoint: 575, settings: { slidesToShow: 1, centerMode: false, variableWidth: false } }
            ]
        });

        safeSlick('.testimonial-slider-one', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.testimonial-arrows'),
            autoplay: true,
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { variableWidth: false, slidesToShow: 1 } }
            ]
        });

        safeSlick('.testimonial-slider-two', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>'
        });

        safeSlick('.weekly-top-product-slider', {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            variableWidth: true,
            slidesToScroll: 1
        });

        safeSlick('.team-slider-one', {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.team-arrows'),
            appendDots: $('.team-slider-dots'),
            autoplay: true,
            centerMode: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1400, settings: { slidesToShow: 4 } },
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]
        });

        safeSlick('.releted-product-slider', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.releted-product-arrows'),
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]
        });

        // Product Details Slider Sync
        var bigSlider = $('.product-big-slider');
        var thumbSlider = $('.product-thumb-slider');
        
        if (bigSlider.length && thumbSlider.length) {
            safeSlick('.product-big-slider', {
                dots: false,
                arrows: false,
                speed: 800,
                autoplay: true,
                fade: true,
                asNavFor: '.product-thumb-slider',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            safeSlick('.product-thumb-slider', {
                dots: false,
                arrows: false,
                speed: 800,
                autoplay: true,
                asNavFor: '.product-big-slider',
                focusOnSelect: true,
                slidesToShow: 4,
                slidesToScroll: 1
            });
        } else if (bigSlider.length) {
            safeSlick('.product-big-slider', {
                dots: false,
                arrows: false,
                speed: 800,
                autoplay: true,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }

        safeSlick('.blogs-slider-one', {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: $('.blogs-arrows'),
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 575, settings: { slidesToShow: 1 } }
            ]
        });

        safeSlick('.instagram-slider-one', {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 575, settings: { slidesToShow: 1 } }
            ]
        });

        //======= Quantity Number js
        $('.quantity-down').unbind('click').on('click', function(){
            var numProduct = Number($(this).next().val());
            if(numProduct > 1) $(this).next().val(numProduct - 1);
        });
        $('.quantity-up').unbind('click').on('click', function(){
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });

        //===== Slider Range
        if ($("#slider-range").length) {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 200,
                values: [ 19, 140 ],
                slide: function( event, ui ) {
                  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        }

        //===== Simply Countdown
        if ($('.simply-countdown').length){
            simplyCountdown('.simply-countdown', {
                year: 2025,
                month: 12,
                day: 31,
                words: {
                    days: { singular: 'day', plural: 'Days' },
                    hours: { singular: 'hour', plural: 'Hours' },
                    minutes: { singular: 'minute', plural: 'Min' },
                    seconds: { singular: 'second', plural: 'Sec' }
                },
            });
        }

        //===== Show More Burtton
        $(".more_categories").unbind('click').on("click", function () {
            $(this).toggleClass("show");
            $(".more_slide_open").slideToggle();
        });

        //====== Aos JS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                offset: 0,
                duration: 1000,
                once: true
            });
            AOS.refresh();
        }
    };

    window.destroyPescoTheme = function() {
        $('.slick-initialized').each(function() {
            try {
                $(this).slick('slickSetOption', 'autoplay', false, false);
                $(this).slick('unslick');
            } catch (e) {
                $(this).removeClass('slick-initialized slick-slider slick-dotted');
            }
        });
        $('.quantity-down, .quantity-up, .more_categories').unbind('click');
    };

    $(document).ready(function() {
        window.initPescoTheme();
    });

})(window.jQuery);
