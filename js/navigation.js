
/* Adjust opacity of navbar */
jQuery(window).scroll(function() {
	if(jQuery(this).scrollTop() > 150) {
		jQuery('.navbar-fixed-top').addClass('opaque');
	} else {
		jQuery('.navbar-fixed-top').removeClass('opaque');
	}
});