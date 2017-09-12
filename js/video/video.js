(function ($) {
    jQuery(document).ready(function ($) {
        $('.option-event-overlay').on('click', function () {
            var embedURL = jQuery(this).next('iframe')[0].src + "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1";
            $('.main-event iframe')[0].src = embedURL;
            $('html, body').animate({
                scrollTop: 0
            }, 'fast');
        })
    });
}(jQuery));