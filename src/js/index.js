$(document).ready(function(){
	$('#slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 5,
		arrows: false,
		slidesToScroll: 5
	});
	$(".nav-link").click(function(e){
		var target = $(this).attr('href');
		let from = $(target).offset().top;
		$('.nav-link.active').removeClass('active');
		$(this).addClass('active')
		$('html, body').animate({
			scrollTop: from
		}, 1000)
		return false;
	})
})