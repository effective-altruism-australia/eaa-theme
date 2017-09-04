<div class="eahub_banner">
    <div class="ea-slider-container">
    <div class="ea-slide ea-slide-1"></div>
    <div class="ea-slide ea-slide-2"></div>
    <!-- <div class="ea-slide ea-slide-3"></div> -->
    </div>
    <div class="eahub_banner_overlay"></div>
    <div class="eahub_banner_text">
        <div class="vcenter">
            <div class="call-to-action">
                <h1>Maximise the impact of your donations</h1><hr>
                <span>Independently-vetted programs, proven to save and improve lives.</span>
                <br>
                <br>
                <a href="/donate" class="btn btn-default btn-home-donate">Donate Now</a>
            </div>
        </div>
    </div>
</div>
	  <script>
	    jQuery(document).ready (function () {
	      jQuery('.ea-slider-container').slick({
		dots: false,
		    prevArrow: false,
		    nextArrow: false,
		autoplay: true,
		infinite: true,
		speed: 4000,
		fade: true,
		cssEase: 'linear',
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 1,
		    infinite: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1,
		    infinite: true
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    infinite: true
		  }
		}
	    ]});
	    });
		</script>
