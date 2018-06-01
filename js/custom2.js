	$(".scroll").on("click",function (event) {
        var $hash=$(this.hash);
        var $hasval=$(this).attr('href');
        if($hasval[0]=="#"){
            if($hash.length>0){
                 event.preventDefault();
                $('html,body').animate({
                    scrollTop: ($hash.offset().top - 60)
                }, 1000);
                $(".scroll").removeClass("active");
                $(this).addClass("active");
            }
            return false; 
        }  
    });
    $(document).on("scroll", onScroll);
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        var menu_li_a=$('#menu li a');
        menu_li_a.each(function () {
            var currLink = $(this);
            var current_attr=currLink.attr("href");
            if(current_attr[0]=="#"){
                var refElement = $(current_attr);
                
                if(refElement.length > 0){
                    var current_element_top=parseFloat(refElement.position().top)-80;
                    if (current_element_top<= scrollPos && current_element_top + refElement.height() > scrollPos) {
                        menu_li_a.removeClass("active");
                        currLink.addClass("active");
                    }
                }

            }

        });
    }

	
	

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


$(window).scroll(function(){
        if($(document).scrollTop()>50){
            $('.navbar').addClass('navnew');
        }
        else{
            $('.navbar').removeClass('navnew');
        }
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
	        480:{
	            items:1,
	            nav:false
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
	});

$('.header-main').ripples({
		resolution: 500,
		dropRadius: 10,
        perturbance: 0.01,
	});


var mixer = mixitup('.travel-single-slider', {
	    selectors: {
	        control: '[data-mixitup-control]'
	    }
	});
	mixer.filter('all');

AOS.init();