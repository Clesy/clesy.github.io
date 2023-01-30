;(function () {
    'use strict';

    function parallax() {
        $(window).stellar();
    }

    function burgerMenu() {
        $('body').on('click', '.js-clesy-nav-toggle', function (event) {
            event.preventDefault();
            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    }

    function goToTop() {
        $('.js-gotop').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500);
            return false;
        });
    }

    function clickMenu() {
        $('#navbar a:not([class="external"])').click(function (event) {
            let section = $(this).data('nav-section');
            let navbar = $('#navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });
    }

    function navActive(section) {
        let $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });
    }

    function navigationSection() {
        let $section = $('section[data-section]');
        $section.waypoint(function (direction) {
                if (direction === 'down') {
                    navActive($(this.element).data('section'));
                }
            },
            {
                offset: '150px'
            }
        );

        $section.waypoint(function (direction) {
                if (direction === 'up') {
                    navActive($(this.element).data('section'));
                }
            },
            {
                offset: function () {
                    return -$(this.element).height() + 155;
                }
            }
        );
    }

    function windowScroll() {
        $(window).scroll(function () {
            var header = $('#clesy-header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function () {
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100);
                }
            }
        });
    }

    var homeAnimate = function () {
        if ($('#clesy-home').length > 0) {

            $('#clesy-home').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#clesy-home .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    var introAnimate = function () {
        if ($('#clesy-intro').length > 0) {

            $('#clesy-intro').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#clesy-intro .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var workAnimate = function () {
        if ($('#clesy-projects').length > 0) {

            $('#clesy-projects').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#clesy-projects .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    var testimonialAnimate = function () {
        var testimonial = $('#fh5co-testimonials');
        if (testimonial.length > 0) {

            testimonial.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = testimonial.find('.to-animate').length,
                        sec = parseInt((sec * 200) - 400);

                    setTimeout(function () {
                        testimonial.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        testimonial.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInDown animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var servicesAnimate = function () {
        var services = $('#clesy-skills');
        if (services.length > 0) {

            services.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = services.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function () {
                        services.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        services.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var aboutAnimate = function () {
        var about = $('#clesy-about');
        if (about.length > 0) {

            about.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        about.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    var experienceAnimation = function () {
        if ($('#clesy-experience').length > 0) {

            $('#clesy-experience').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#clesy-experience .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    // Document on load.
    $(function () {

        parallax();
        burgerMenu();
        clickMenu();
        windowScroll();
        navigationSection();
        goToTop();

        // Animations
        homeAnimate();
        introAnimate();
        workAnimate();
        testimonialAnimate();
        servicesAnimate();
        aboutAnimate();
        // countersAnimate();
        experienceAnimation();
        // contactAnimate();
    });
}());