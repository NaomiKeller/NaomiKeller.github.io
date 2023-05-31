$(function(){
	// Hide overflow on start menu
	$('body').css('overflow', 'hidden');
	// Hide game table on start menu
	$('#divTable').css('opacity', 0);
	// Show game table and hide title
	$('.start-btn').on('click', () => {
		$('#title').css('opacity', 0);
		$('#divTable').css('opacity', 1);
	});
	// Notify user if not in correct orientation
	if ( $(window).width() < 768 ) {
		let orientation = window.orientation; // 90 is landscape, 0 is portrait
		if ( orientation === 0 ) {
			$('.orientation-warning').css('display', 'block');
		} else {
			$('.orientation-warning').css('display', 'none');
		}
	}
	$( window ).on( "orientationchange", function( event ) {
		if ( $(window).width() < 768 ) {
			let orientation = window.orientation; // 90 is landscape, 0 is portrait
			if ( orientation === 0 ) {
				$('.orientation-warning').css('display', 'block');
			} else {
				$('.orientation-warning').css('display', 'none');
			}
		}
	});
	$('#close-warning').on('click', () => {
		$('.orientation-warning').css('display', 'none');
	});
	$('.start-btn').on('click', () => {
		$('body').css('overflow', 'auto');
		let width = $('#divTable').width();
		if ( width > 681 ) {
			$('.orientation-warning').css('font-size', '120%');
			$('.orientation-warning').find('span').css('font-size', '120%');
		}
	});
	// help modal
	$('.help-icon').on('click', () => {
		$('body').css('overflow', 'auto');
		$('.dim-background').css('visibility', 'visible');
		$('.div-help').css('visibility', 'visible');
		$('.dim-background').css('opacity', 1);
		$('.div-help').css('opacity', 1);
	});
	$('.help-exit').on('click', () => {
		$('body').css('overflow', 'hidden');
		$('.dim-background').css('visibility', 'hidden');
		$('.div-help').css('visibility', 'hidden');
		$('.dim-background').css('opacity', 0);
		$('.div-help').css('opacity', 0);
	});
});