$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function() {
 	$('a[href*=#]').bind('click', function(e) {
 	e.preventDefault();
 
 	var target = $(this).attr("href");
 
$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
 	location.hash = target;
});
 
 	return false;
 	});
});

$(document).ready(function () {
	$('.main-slider__slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.dotts-slider__menu',
		nextArrow: '.dotts-slider__line span'
	});
	$('.main-slider__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log(nextSlide);
	});
	$('.main-slider__slider').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
	});
	$('.link__add').click(function (event) {
		$('.main-slider__slider').slick('slickAdd', '<div class="newslide">123</div>');
		return false;
	});
	$('.link__remove').click(function (event) {
		$('.main-slider__slider').slick('slickRemove', 0);
		return false;
	});
});

$(document).ready(function () {
	$('.dotts-slider__menu').click(function (event) {
		if ($('.dotts-slider__menu').hasClass('one')) {
			$('.dotts-slider__menu').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.activities-spoller__header').click(function (event) {
		if ($('.activities-spoller').hasClass('one')) {
			$('.activities-spoller__header').not($(this)).removeClass('active');
			$('.activities-spoller__text-block').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.quotes-slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
	});
	$('.quotes-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log(nextSlide);
	});
	$('.quotes-slider').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
	});
	$('.link__add').click(function (event) {
		$('.quotes-slider').slick('slickAdd', '<div class="newslide">123</div>');
		return false;
	});
	$('.link__remove').click(function (event) {
		$('.quotes-slider').slick('slickRemove', 0);
		return false;
	});
});