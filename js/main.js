$(document).ready(function() {

	"use strict";


	/* --------------------------------------------------------
	 	Testimonial
	 * -------------------------------------------------------*/

	$(".testCaro").owlCarousel({
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});


	/* --------------------------------------------------------
	 PROJECTS FLITER
	 * -------------------------------------------------------*/

	var $ProjectsFilter = $(".projects-filter"),
		ProjectLength= $ProjectsFilter.length,
		$shopFilter = $(".shop-filter"),
		shopLength= $shopFilter.length,
		$projectsAll = $("#projects-all"),
		$shopAll = $("#shop-all"),
		$PH = $(".project-hover").innerHeight(),
		$SH = $(".product-hover").innerHeight();

	/* Add Height To Project/Shop Hover DIV */
	/*$(".project-hover").css({height:$PH});
	 $(".product-hover").css({height:$SH});
	 */

	// init Isotope For Projects
	$ProjectsFilter.find("a").click(function(e){
		e.preventDefault();
		$ProjectsFilter.find("a.active-filter").removeClass("active-filter");
		$(this).addClass("active-filter");
	});

	if (ProjectLength > 0) {
		$projectsAll.imagesLoaded().progress( function() {
			$projectsAll.isotope({
				filter: "*",
				animationOptions: {
					duration: 750,
					itemSelector: ".project-item",
					easing: "linear",
					queue: false,
				}
			});
		});
	}
	$ProjectsFilter.find("a").click(function(e){
		e.preventDefault();
		var $selector = $(this).attr("data-filter");
		$projectsAll.imagesLoaded().progress( function() {
			$projectsAll.isotope({
				filter: $selector,
				animationOptions: {
					duration: 750,
					itemSelector: ".project-item",
					easing: "linear",
					queue: false,
				}
			});
			return false;
		});
	});

	// init Isotope For Shop
	$shopFilter.find("a").click(function(e){
		e.preventDefault();
		$shopFilter.find("a.active-filter").removeClass("active-filter");
		$(this).addClass("active-filter");
	});
	if (shopLength > 0) {
		$shopAll.imagesLoaded().progress( function() {
			$shopAll.isotope({
				filter: "*",
				animationOptions: {
					duration: 750,
					itemSelector: ".product-item",
					easing: "linear",
					queue: false,
				}
			});
		});
	}
	$shopFilter.find("a").click(function(e){
		e.preventDefault();
		var $selector = $(this).attr("data-filter");
		$shopAll.imagesLoaded().progress( function() {
			$shopAll.isotope({
				filter: $selector,
				animationOptions: {
					duration: 750,
					itemSelector: ".product-item",
					easing: "linear",
					queue: false,
				}
			});
			return false;
		});
	});



	/*----------------------------
	 loader
	 ------------------------------ */
	$(window).load(function() {
		$(".loading-overlay .spinner").fadeOut(300), $(".loading-overlay").fadeOut(300)
	}), $(window).load(function() {
		$("body").css({
			overflow: "auto",
			height: "auto",
			position: "relative"
		})
	})



	/*----------------------------
	 scrollUp
	 ------------------------------ */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});



	/* --------------------------------------------------------
	 Accordion widget in sidebar
	 * -------------------------------------------------------*/
	$(".accordion-widget").click(function(event) {
		if ($(this).find(".accordion-widget-plus").length) {
			$(".accordion-widget .accordion-widget-minus").parent().prepend("<span class='accordion-widget-plus'>+</span>").find(".accordion-widget-minus").remove();
			$(".accordion-widget").next(".collapse.in").collapse('hide');
			$(this).prepend("<span class='accordion-widget-minus'>-</span>").find(".accordion-widget-plus").remove();
			$(this).parent().find(".collapse").collapse('show');
		} else {
			$(".accordion-widget .accordion-widget-minus").parent().prepend("<span class='accordion-widget-plus'>+</span>").find(".accordion-widget-minus").remove();
			$(".accordion-widget").next(".collapse.in").collapse('hide');
		}
	});

	/* --------------------------------------------------------
	 Accordion checkout
	 * -------------------------------------------------------*/
	$(".checkout_accordion").collapse({
		accordion: true,
		open: function() {
			this.slideDown(550);
		},
		close: function() {
			this.slideUp(550);
		}
	});



});

$(document).ready(function(){
	$(".bank-btn1").click(function(){
		$(this).addClass("active");

		setTimeout(function(){
			$(".bank-btn1").addClass("success");

		}, 3700);
		setTimeout(function(){
			$("bank-btn1").removeClass("active");
			$("bank-btn1").removeClass("success");
		}, 5000);
	});
});
$(document).ready(function(){
	$(".bank-btn2").click(function(){
		$(this).addClass("active");

		setTimeout(function(){
			$(".bank-btn2").addClass("success");

		}, 3700);
		setTimeout(function(){
			$("bank-btn2").removeClass("active");
			$("bank-btn2").removeClass("success");
		}, 5000);
	});
});

// the social media Share buttons code is here Musty.

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const instagramBtn = document.querySelector(".instagram-btn");


function init() {
  const instagramImg = document.querySelector(".attachment-shop_single");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, Please check this out: ");
  let postImg = encodeURI(instagramImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  instagramBtn.setAttribute(
    "href",
    `https://www.instagram.com/afrizonmall/`
  );

}

init();