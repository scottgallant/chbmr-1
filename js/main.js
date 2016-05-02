$(function() {
	function slideDown(){
		console.log("make tall");
		$(this).children('ul').slideDown(200);
	}
	function slideUp(){
		console.log("make tall");
		$(this).children('ul').slideUp(200);
	}
	$("li.nested").hoverIntent({
		over: slideDown,
    out: slideUp,
    timeout: 300
   });
});
