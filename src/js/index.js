$(document).ready(function(){
	console.log('privet')
	$('#slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 6,
		arrows: false,
		slidesToScroll: 6
	});
})