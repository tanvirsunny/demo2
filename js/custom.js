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



    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1
    });
    $('.team-main-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3
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
      triggerElement:'.heading_sec',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.heading_sec','heading_sec_anim')
    .addTo(controller);  


    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.process-text',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.process-text','process-text_anim')
    .addTo(controller);

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_1',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_1','item_sec_1_anim')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_2',
      duretion:'100%',
      triggerHook: 1
    })
    
    .setClassToggle('.item_sec_2','item_sec_1_anim2')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_3',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_3','item_sec_1_anim3')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
      triggerElement:'.item_sec_4',
      duretion:'100%',
      triggerHook: 1
    })
    .setClassToggle('.item_sec_4','item_sec_1_anim4')
    .addTo(controller);
    

    var ourScene=new ScrollMagic.Scene({
          triggerElement:'.heading_sec_2',
          duretion:'100%',
          triggerHook: 1
        })
        .setClassToggle('.heading_sec_2','heading_sec_2_anim')
        .addTo(controller);
     

     var ourScene=new ScrollMagic.Scene({
        triggerElement:'.sec_text',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.sec_text','sec_text_anim')
      .addTo(controller); 

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.protfulio-wrapper',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.protfulio-wrapper','protfulio-wrapper_anim')
      .addTo(controller);


      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_3',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_3','heading_sec_3_anim')
      .addTo(controller); 

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.sec_text_3',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.sec_text_3','sec_text_3_anim')
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
        triggerElement:'.team-main-slider',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.team-main-slider','team-main-slider_anim')
      .addTo(controller);
      

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.heading_sec_4',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.heading_sec_4','heading_sec_4_anim')
      .addTo(controller);
      

      var ourScene=new ScrollMagic.Scene({
        triggerElement:'.contact-us-main',
        duretion:'100%',
        triggerHook: 1
      })
      .setClassToggle('.contact-us-main','contact-us-main_anim')
      .addTo(controller);
