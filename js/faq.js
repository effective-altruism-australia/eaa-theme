(function ($) {
  $(document).ready (function ($) {

     $(".faq-nav ul a[href*='#']").on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 65 }, 500);
      });

      var b = $(window), c = $(document.body);
      c.scrollspy({
          target: ".faq-nav",
          offset: 65
      }), b.on("load", function() {
          c.scrollspy("refresh")
      })

  });
}(jQuery));