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

$(document).ready(function () {
	$('.main-slider__slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.dotts-slider__menu',
		nextArrow: '.dotts-slider__line span'
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
});