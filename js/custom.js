$(document).ready(function(){
    $('.navbar-toggle').click(function() { 
          $(this).toggleClass('active');
    });

    $(window).scroll(function(){
      if($(document).scrollTop()>50){

          $('.navbar').addClass('navnew');
      }
      else{
          $('.navbar').removeClass('navnew');
      }
        
    });

    $('.navbar-collapse li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1500);
       return false;
      }
    }
  });


    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1
    });


    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
})

    var tl = new TimelineLite();
    var $heading1 = $('.heading-1');
    var $heading2 = $('.heading-2');
    var $buttonarea = $('.hire');
    var $imageanim = $('.home-img');

    tl.to($heading1, 1.4, {x:0,y:0, autoAlpha: 1});
    tl.to( $heading2, 1.4, {x:0,y:0, autoAlpha: 1});
    tl.to( $buttonarea, 1.3, {x:0,y:0, autoAlpha: 1});
    tl.to( $imageanim, 1.5, {x:0,y:0, autoAlpha: 1});


    var controller=new ScrollMagic.Controller();

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.why-us-mokup',
      duretion:'200%',
      triggerHook:.5
    })
    .setClassToggle('.why-us-mokup','why-us-mokup-fade-out')
    .addTo(controller);

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.why-us-mokup2',
      duretion:'200%',
      triggerHook:.4
    })
    .setClassToggle('.why-us-mokup2','why-us-mokup-fade-out')
    .addTo(controller);

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.why-us-mokup3',
      duretion:'200%',
      triggerHook:.5
    })
    .setClassToggle('.why-us-mokup3','why-us-mokup-fade-out')
    .addTo(controller);


    var controller=new ScrollMagic.Controller();

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.main-heading',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.main-heading','main-heading-anim')
    .addTo(controller);  


    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.p-text',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.p-text','p-text-anim')
    .addTo(controller);


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-heading',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-heading','service-process-heading_anim')
      .addTo(controller);

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-text',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-text','service-process-text_anim')
      .addTo(controller); 


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.service-process-single-content',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.service-process-single-content','service-process-single-content_anim')
      .addTo(controller);
      
      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.team-mokup',
        duretion:'200%',
        triggerHook:.5
      })
      .setClassToggle('.team-mokup','team-mokup-anim')
      .addTo(controller);


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_3',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_3','heading_sec_3_anim')
      .addTo(controller);


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_4',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_4','heading_sec_4_anim')
      .addTo(controller);
