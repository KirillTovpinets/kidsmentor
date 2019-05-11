$(document).ready(function(){
	$('#slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 5,
		arrows: false,
		slidesToScroll: 5
	});
	$(".nav-link, .scroll-top").click(function(e){
		var target = $(this).attr('href');
		let from = $(target).offset().top;
		$('.nav-link.active').removeClass('active');
		$(this).addClass('active')
		$('html, body').animate({
			scrollTop: from
		}, 1000)
		return false;
	})

	$("#mobile-toggler").click(function(e){
		$(".mobile-nav").toggleClass('active');
	})
})

$(window).scroll(function(e){
	let top = $('html').scrollTop();
	if(top > 500) {
		$('.scroll-top').css('opacity', 1);
		$('.top-bar').addClass('fixed');
	} else{
		$('.scroll-top').css('opacity', 0);
		$('.top-bar').removeClass('fixed');
	}
})