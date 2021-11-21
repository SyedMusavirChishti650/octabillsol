//
(function ($) {
"use strict";
	// Define your library strictly...
	jQuery(document).ready( function ($) {
		/* ------------------------------------- */
		/** Initializing the Flexslider */
		if ( $.isFunction($.fn.flexslider) && typeof flexslider_args !== 'undefined' ) {
			if(typeof flexslider_args != "undefined") {
				jQuery(".flexslider").flexslider({
					animation: flexslider_args.slideeffect,
					controlsContainer: ".flex-container",
					slideshow: true,
					slideshowSpeed: flexslider_args.slidespeed,
					animationSpeed: 1200,
					directionNav: flexslider_args.slidednav,
					controlNav: false,
					mousewheel: false,
					smoothHeight :false,
				    prevText: " ", //String: Set the text for the "previous" directionNav item
				    nextText: " ", //String: Set the text for the "next" directionNav item
					start: function(slider) {
						jQuery(".total-slides").text(slider.count);
						jQuery(".flex-active-slide").find(".flex-caption").addClass("flex-caption-anim");
					},
					before: function(slider){
						  jQuery(slider).find(".flex-active-slide").each(function(){
							jQuery(".flex-active-slide").find(".flex-caption").removeClass("flex-caption-anim");
						  });
					},
					after: function(slider){
					  jQuery(".flex-active-slide").find(".flex-caption").addClass("flex-caption-anim");
					}
				});
			}
		}

		/* 		Pretty Photo 	*/
		/* ------------------------------------- */
		if ( $.isFunction($.fn.prettyPhoto) ) {
			$("a[data-rel^='prettyPhoto']").prettyPhoto({
				theme: 'pp_default',
				social_tools: false,
				deeplinking : false
			});
		}

		/* Footer Branches   	  */
		/* ====================== */
		$('.footer-branches').hide();
		$( ".at-footer-branches" ).on('click', function(e) {
			e.preventDefault();
 			$(this).toggleClass('at-toggleOpen');
			$( ".footer-branches" ).slideToggle(500);
		  	$('html, body').animate({
          		scrollTop: $(document).height()
      		}, 500);
		});

		/* Tooltip                */
		/* ====================== */
		$('.ultranettip,.iva_tip').hover(function () {
			var ivaWidth = $(this).outerWidth();
			var tooltipWidth = $(this).find('span.ttip').outerWidth();
			var left = (ivaWidth - tooltipWidth) / 2;
			$(this).find('span.ttip').css('left', left).fadeIn();
		}, function () {
			$(this).find('span.ttip').fadeOut();
		});

		/* Vidoe Resize Fitvids   */
		/* ====================== */
		if ( $.fn.fitVids) {
			$('.video-frame,.boxcontent,.video-stage,.video,.post,.iva_map').fitVids();
		}

		/* BacktoTop Scroll       */
		/* ====================== */
		// hide #back-top first
		$("#back-top").hide();

		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);

			   return false;
			});
		});

		/* Fixed Header           */
		/* ====================== */
		var $aSelected = $('#wrapper').find('div');

		if( $aSelected.is('#fixedheader') ){

			var stickyHeaderTop = $('#fixedheader').offset().top;
			var $wpAdminBar = $('#wpadminbar');

			$( window ).scroll(function(){
				if( $( window ).scrollTop() > stickyHeaderTop ) {
					$('#fixedheader').addClass("fixed-header");
					if ( jQuery(window).width() > 1024) {
						$('.logo img').css({'transform':'scale(0.72)'});
						if ( $wpAdminBar.length ) {
							$('.fixed-header').css('top',$wpAdminBar.height()+'px');
						}
					}
				} else {
					$('#fixedheader').removeClass("fixed-header");
					$('#fixedheader').css('top','0');
					if ( jQuery(window).width() > 1024) {
						$('.logo img').css({'transform':'scale(1)'});
					}
				}
			});
		}

		/* Searchbar Pop-up       */
		/* ====================== */
		$('#ivaSearch').on("click", function(e) {
			if ($(e.srcElement).closest('#ivaSearchbar').length) return;
			$('#ivaSearchbar').slideDown(300);
			$('#ivaSearchbar input[type=text]').focus();
			return false;
		});

		$('.search-close').on("click", function(e) {
			jQuery('#ivaSearchbar').slideUp(300);
		});

		$('body').on("click", function(e){
			var target = $(e.target);
			if(!target.is(".ivaInput")) {
				jQuery('#ivaSearchbar').slideUp(300);
			}
		})

		$(".sf-menu").superfish({
			cssArrows: false,
		});

		// Adds custom class to datepicker ui
		jQuery(".ui-datepicker").addClass("iva-date-ui");

		// Stickybar Toggler
		jQuery("#trigger").click(function () {
	        jQuery(this).next("#sticky").slideToggle({
	        	duration: 300
	        });
	    });

		var $wpAdminBar = $('#wpadminbar');
		var tarrow, sticky_adminbar;

		if ( $wpAdminBar.length ) {
			sticky_adminbar = $wpAdminBar.height() + 5;
			tarrow = $('.tarrow').css({ top: sticky_adminbar });
		} else {
			sticky_adminbar = 5;
			tarrow = $('.tarrow').css({top: sticky_adminbar });
		}

		// Stickybar Toggler
		jQuery("#trigger").toggle(function () {
	        jQuery(this)
				.animate({ top: sticky_adminbar }, 50)
				.animate({ top: sticky_adminbar }, 50)
				.animate({ top: sticky_adminbar }, 800).children().addClass("fa-arrow-circle-o-up");
	    }, function () {
	        jQuery(this)
				.animate({ top: sticky_adminbar }, 50)
				.animate({ top: sticky_adminbar }, 50)
				.animate({ top: sticky_adminbar }, 800).children().removeClass("fa-arrow-circle-o-up");
		});

		// Easing
		jQuery.extend( jQuery.easing,{
			easeIn: function (x, t, b, c, d) {
				return jQuery.easing.easeInQuad(x, t, b, c, d);
			},
			easeOut: function (x, t, b, c, d) {
				return jQuery.easing.easeOutQuad(x, t, b, c, d);
			},
			easeInOut: function (x, t, b, c, d) {
				return jQuery.easing.easeInOutQuad(x, t, b, c, d);
			},
			expoin: function(x, t, b, c, d) {
				return jQuery.easing.easeInExpo(x, t, b, c, d);
			},
			expoout: function(x, t, b, c, d) {
				return jQuery.easing.easeOutExpo(x, t, b, c, d);
			},
			expoinout: function(x, t, b, c, d) {
				return jQuery.easing.easeInOutExpo(x, t, b, c, d);
			},
			bouncein: function(x, t, b, c, d) {
				return jQuery.easing.easeInBounce(x, t, b, c, d);
			},
			bounceout: function(x, t, b, c, d) {
				return jQuery.easing.easeOutBounce(x, t, b, c, d);
			},
			bounceinout: function(x, t, b, c, d) {
				return jQuery.easing.easeInOutBounce(x, t, b, c, d);
			},
			elasin: function(x, t, b, c, d) {
				return jQuery.easing.easeInElastic(x, t, b, c, d);
			},
			elasout: function(x, t, b, c, d) {
				return jQuery.easing.easeOutElastic(x, t, b, c, d);
			},
			elasinout: function(x, t, b, c, d) {
				return jQuery.easing.easeInOutElastic(x, t, b, c, d);
			},
			backin: function(x, t, b, c, d) {
				return jQuery.easing.easeInBack(x, t, b, c, d);
			},
			backout: function(x, t, b, c, d) {
				return jQuery.easing.easeOutBack(x, t, b, c, d);
			},
			backinout: function(x, t, b, c, d) {
				return jQuery.easing.easeInOutBack(x, t, b, c, d);
			}
		});
	});
})();

// Mobile Menu Jquery
jQuery(document).ready(function($) {
	'use strict';
	$('#iva-mobile-nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.iva-mobile-menu').slideToggle(500);
		return false;
	});
	// Child Menu Toggle
	jQuery('.iva-children-indenter').click(function(){
		$(this).parent().parent().toggleClass('iva-menu-open');
		$(this).parent().parent().find('> ul').slideToggle();

		return false;
	});

	resizemobile();
});

// On Window Resize
function resizemobile(){
	// show meun starting from iPad Portrait
	if( window.innerWidth < 959 ){
		jQuery('.header #menuwrap').hide();
		jQuery('.header .iva-light-logo').hide();
		jQuery('.header .iva-dark-logo').show();
	}else {
		jQuery('.header #menuwrap').show();
		jQuery('.iva-mobile-menu').hide();
		jQuery('.header .iva-light-logo').show();
		jQuery('.header .iva-dark-logo').hide();
	}
}
//Init
jQuery(window).resize(resizemobile);

//Wait for window load
jQuery(window).load(function() {
	jQuery('.ultranet_page_loader').fadeOut(1000);
});

// Aivah Post Like
jQuery(document).ready(function($){
	'use strict';
	$(document).on('click','.iva-love', function() {
		var $loveLink = $(this);
		var $id = $(this).attr('id');

		if($loveLink.hasClass('loved')) return false;

		var $sendTheData = {
			action: 'ultranet-love',
			loves_id: $id
		}
		$.post(ivaLove.ajaxurl, $sendTheData, function(data){
			$loveLink.find('span').html(data);
			$loveLink.addClass('loved').attr('title', ivaLove.youLikedit);
			$loveLink.find('span').css({'opacity': 1,'width':'auto'});
		});
		return false;
	});
});

/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(){var e=t(this);if(!(e.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/a;if(!e.attr("name")){var o="fitvid"+t.fn.fitVids._count;e.attr("name",o),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto);
