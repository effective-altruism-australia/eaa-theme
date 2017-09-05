jQuery(document).ready(function() {
    jQuery('.option-event-overlay').on('click', function() {
    var embedURL = jQuery(this).next('iframe')[0].src + "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1";
    jQuery('.main-event iframe')[0].src = embedURL;
    jQuery('html, body').animate({
        scrollTop: 0
    }, 'fast');
    });

});