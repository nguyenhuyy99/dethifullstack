$(document).ready(function () {
	$('.home-banner .owl-carousel').owlCarousel({
		nav: true,
		items: 1,
		dots: false,
		loop: true,
		responsive:{
			768:{
				nav: false,
				dots: true
			}
		}
	});
});
