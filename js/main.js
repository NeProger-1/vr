$(function(){
 $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.svg" alt=""></button>'
    });
});