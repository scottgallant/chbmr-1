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

  $(".card").on('click', function(){
    window.location = $(this).find('a').attr('href');
  });

  $(".column-list-layout .post").on('click', function(){
    window.location = $(this).find('a').attr('href');
  });

// flex slider for homepage logos
// store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;
  }

  $(function() {
    // SyntaxHighlighter.all();
  });

  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 70,
      itemMargin: 120,
			directionNav: false,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: 3 // use function to pull in initial value
    });
  });

  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
});