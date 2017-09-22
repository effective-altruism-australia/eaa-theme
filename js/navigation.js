
/* Adjust opacity of navbar */
jQuery(window).scroll(function() {
	if(jQuery(this).scrollTop() > 150) {
		jQuery('.navbar').addClass('opaque');
	} else {
		jQuery('.navbar').removeClass('opaque');
	}
});