;(function () {

	'use strict';

	// last edited on 2017/02/25
	var init = function() {
		// disable click event on <span> in buttons (arrows in sort button)
		$(".sort-btn span").css("pointer-events", "none");
		// disable click event on <div> for lipstick shades
		$(".fh5co-work-wrap a").off('click');
		// sort by occurence by default
		var divList = $(".fh5co-work-wrap");
		divList.sort(function(a, b){ return $(b).data("occurrence")-$(a).data("occurrence")}); //in descending order
  		$("#shades-container").html(divList);
	};

	// iPad and iPod detection
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
	      (navigator.platform.indexOf("iPhone") != -1) ||
	      (navigator.platform.indexOf("iPod") != -1)
	    );
	};


	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	var menuAnimate = function(o, margin, duration, mul) {
		var navLi = $('#fh5co-nav > ul > li'),
			ktemp = 0;
		navLi.each( function(k){
			var el = $(this);
			setTimeout(function() {
				el.velocity(
					{ opacity: o, marginRight: margin },
					{ duration: duration }
				);
			},  k * mul );
			ktemp = k;
		});

		console.log(ktemp);
		setTimeout(function(){
			$('.js-fh5co-nav-call-to-action').velocity(
				{ opacity: o, marginRight: margin },
				{ duration: duration }
			);
		}, ktemp+1 * mul );


	};

	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(){
			$('#fh5co-nav > ul > li, .js-fh5co-nav-call-to-action').css({ marginRight: -50, opacity: 0 });
			$(this).toggleClass('active');

			var mainNav = $('#fh5co-main-nav');
			mainNav.slideToggle(400).toggleClass('active');


			if ( mainNav.hasClass('active') ) {
				menuAnimate(1, 0, 400, 200);
			} else {
				menuAnimate(0, -50, 1, 0);
			}

		});
	};

	var mobileMenuState = function() {
		if ( $(window).width() > 768 ) {
			$('#fh5co-main-nav').removeClass('active').show();
			$('#fh5co-nav > ul > li, .js-fh5co-nav-call-to-action').attr('style', '');
		} else {
			$('.js-fh5co-nav-toggle').removeClass('active');
			$('#fh5co-main-nav').hide();
		}
	};

	// last edited on 2017/04/12
	var imgHover = function(){
		$('.js-fh5co-work-item').mouseenter(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-fh5co-overlay-bg, .js-fh5co-overlay-text').stop().animate({
					opacity: 1
				});
			}
		}).mouseleave(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-fh5co-overlay-bg, .js-fh5co-overlay-text').stop().animate({
					opacity: 0
				});
			}
		});
		// Stop the page from jumping back to the top when shades are clicked.
		// Todo: Implement the touch effect for touchscreen devices.
		$('.js-fh5co-work-item').click(function(){
			return false;
		});
	};

	var viewWorks = function() {
		$('.js-fh5co-view').click(function(evt){

			var $this = $(this);
			$this.toggleClass('active');
			setTimeout(function(){
				$('.js-fh5co-more-works').slideToggle(400);
				if ( $this.hasClass('active') ) {
					$this.find('.js-fh5co-view-text').text('View Less');
				} else {
					$this.find('.js-fh5co-view-text').text('View All');
				}
			}, 500);

			evt.preventDefault();

		})
	};





	// Easy Repsonsive Tabs
	var responsiveTabs = function(){
		$('#fh5co-tab-feature').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'

	    });
	    $('#fh5co-tab-feature-center').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'

	    });
	    $('#fh5co-tab-feature-vertical').easyResponsiveTabs({
	      type: 'vertical',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	    });
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};

	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};

	// Smooth Scroll Top
	var sScrollTop = function () {

		$(window).scroll(function(){
			if ($(window).scrollTop() > 100 ) {
				$('.fh5co-gotop').show();
			} else {
				$('.fh5co-gotop').hide();
			}
		});
		$('.fh5co-gotop').click(function(event){

		    $('html, body').animate({
		        scrollTop: 0
		    }, 500);

		    event.preventDefault();
		    return false;
		});
	};

	var wResize = function() {
		mobileMenuState();
		imgHover();
		$(window).resize(function(){
			mobileMenuState();
			imgHover();
		});

	};

	// last edited on 2017/04/12
	var sortShades = function() {
		var divList = $(".fh5co-work-wrap");
		$("#hottest").click(function(){
  			divList.sort(function(a, b){ return $(b).data("occurrence")-$(a).data("occurrence")}); //in descending order
				divList.each(function(){
  				var drama = $(this).data("drama").toString();
  				$(this).find("li").text("From: " + drama);
				});
  			$("#shades-container").html(divList);
		});
		$("#latest").click(function(){
  			divList.sort(function(a, b){ return $(b).data("time")-$(a).data("time")});
  			// update text with time info
  			divList.each(function(){
  				var t = $(this).data("time").toString();
  				$(this).find("li").text("Time: " + t.slice(0,4) + "/" + t.slice(4,6) + "/" + t.slice(6));
				});
  			$("#shades-container").html(divList);
		});
		// desc & asc sorting
		$("#price").click(function(){
  			var asc = $('#up_arrow')
  			var desc = $('#down_arrow')
  			if (asc.hasClass('inactive')&&desc.hasClass('inactive')){
  				divList.sort(function(a, b){ return $(b).data("listing-price")-$(a).data("listing-price")});
  				desc.removeClass('inactive');
  			} else if(asc.hasClass('inactive')&&!desc.hasClass('inactive')) {
  				divList.sort(function(a, b){ return $(a).data("listing-price")-$(b).data("listing-price")});
  				asc.removeClass('inactive');
  				desc.addClass('inactive');
  			} else if(!asc.hasClass('inactive')&&desc.hasClass('inactive')) {
  				divList.sort(function(a, b){ return $(b).data("listing-price")-$(a).data("listing-price")});
  				asc.addClass('inactive');
				desc.removeClass('inactive');
  			}
  			// update text with price info
  			divList.each(function(){
  				$(this).find("li").text("Price: CNY" + $(this).data("listing-price"));
			});
  			$("#shades-container").html(divList);
		});
		//re-assign the onmouseover event after re-ordering shades
		$('.sort-btn').click(function(event){
			imgHover();
		});
	};

	var wResize = function() {
		mobileMenuState();
		imgHover();
		$(window).resize(function(){
			mobileMenuState();
			imgHover();
		});

	};

	// last edited on 2017/02/25
	var adjustTooltipPos = function() {
		var buttons = $('.sort-btn');
		buttons.each(function(){
  			var h = $(this).find(".tip-content").height();
  			$(this).find(".tip-content").css("margin-top", -h-6);
		});
	};


	$(function(){
		init();
		burgerMenu();
		mobileFastClick();
		responsiveTabs();
		magnifPopup();
		owlCrouselFeatureSlide();
		testimonialCarousel();
		sScrollTop();
		wResize();
		viewWorks();
		sortShades();
		adjustTooltipPos();
	});


}());
