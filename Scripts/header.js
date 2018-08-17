$(document).ready(function() {
	$(window).on('scroll',function() {
		var heightnav = $("#header").height() - 70;
		if($(window).scrollTop() > heightnav) {
			$('nav').addClass("fixed");
		}
		else {
			$('nav').removeClass("fixed");
		}
	});
});