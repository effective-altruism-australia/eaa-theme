
/* Adjust opacity of navbar */
jQuery(window).scroll(function() {
	if(jQuery(this).scrollTop() > 150) {
		jQuery('.navbar-header').addClass('opaque');
	} else {
		jQuery('.navbar-header').removeClass('opaque');
	}
});