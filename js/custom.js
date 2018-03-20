(function($){



	$('.header-main').ripples({
		resolution: 500,
		dropRadius: 10,
        perturbance: 0.01,
	});

	$(window).scroll(function(){
        if($(document).scrollTop()>50){
            $('.navbar').addClass('navnew');
        }
        else{
            $('.navbar').removeClass('navnew');
        }
    })

		  var lastScrollTop = 0;
		  var $navbar = $('.navbar');
		  var navbarHeight = $navbar.outerHeight();
		  var movement = 0;
		  var lastDirection = 0;

		  $(window).scroll(function(event){
		    var st = $(this).scrollTop();
		    movement += st - lastScrollTop;

		    if (st > lastScrollTop) { // scroll down
		      if (lastDirection != 1) {
		        movement = 0;
		      }
		      var margin = Math.abs(movement);
		      if (margin > navbarHeight) {
		        margin = navbarHeight;
		      }
		      margin = -margin;
		      $navbar.css('margin-top', margin+"px")

		      lastDirection = 1;
		    } else { // scroll up
		      if (lastDirection != -1) {
		        movement = 0;
		      }
		      var margin = Math.abs(movement);
		      if (margin > navbarHeight) {
		        margin = navbarHeight;
		      }
		      margin = margin-navbarHeight;
		      $navbar.css('margin-top', margin+"px")

		      lastDirection = -1;
		    }

		    lastScrollTop = st;
		    // console.log(margin);
		  });

	$('.clint-area-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    animateIn:'fadeOut',
    	animateOut:'fadeInRight',
	    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	})
	$('.travel-area-right').owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    dots:true,
		    animateIn:'fadeOut',
	    	animateOut:'fadeInRight',
		    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1000:{
		            items:1,
		            nav:false,
		            loop:false,
		            dots:true
		        }
		    }
		})



	
})(jQuery);


