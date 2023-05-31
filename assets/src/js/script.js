$(document).ready(function(){

    // Toggle hamburger menu.
    $('.nkp-nav .nkp-nav__hamburger-btn').click(function() {
        $(this).parents().find('.nkp-nav__hamburger').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    // Hide hamburger menu overlay.
    $('.overlay').click(function() {
        $('.nkp-nav__hamburger').removeClass('active');
        $('.overlay').removeClass('active');
    });

    // Give nav background on scroll down.
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll > 0) {
            $('.nkp-nav').addClass('has-background');
        } else {
            $('.nkp-nav').removeClass('has-background');
        }
    });

    // Scroll to top.
    $('.btn-top').click(function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Scroll to related nav item.
    $('.nkp-nav li a').click(function() {
        let id = $(this).attr('id');
        let target = $('section[data-scroll="' + id + '"]');

        $('.nkp-nav__hamburger').removeClass('active');
        $('.overlay').removeClass('active');

        $('html').animate({
            scrollTop: target.offset().top - 100
        }, 400);
    });
});