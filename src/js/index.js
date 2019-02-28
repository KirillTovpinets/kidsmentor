$(document).ready(function(){
	$('#slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 6,
		arrows: false,
		slidesToScroll: 6
	});
	$(".nav-link").click(function(e){
		var target = $(this).attr('href');
		let from = $(target).offset().top;
		$('html, body').animate({
			scrollTop: from
		}, 1000)
		return false;
	})
})