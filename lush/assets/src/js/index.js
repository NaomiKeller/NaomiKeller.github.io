$(function(){
	// Hamburger toggle
	$('.hamburger-btn').on('click', () => {
		$('.hamburger-menu').toggleClass("active");
		$('.hamburger-btn').toggleClass("active");
		$('nav').toggleClass("active");
	});
});