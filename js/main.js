$(function() {
	$('.expanding-faq').on({
    mouseenter: function(){
			$(this).addClass('hover');
    },
    mouseleave: function(){
			$(this).removeClass('hover');
    }
  });
	$('.expanding-faq').on('click', function(e) {
	   $(this).children('.answer').slideToggle('fast');
	   e.preventDefault();
	});
});
