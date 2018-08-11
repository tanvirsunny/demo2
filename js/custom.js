$(document).ready(function(){
   $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots:true,
      speed:1000,
      fade: true,
      autoplaySpeed: 3000
    }).slickAnimation();


    $('.multiple-items').slick({
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });

     $('.visa').slick({
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1
    });
     $('.testimonials').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });


 // $('.slider_wrap').slick({
 //      slidesToShow: 1,
 //      slidesToScroll: 1,
 //      speed:1000
 //    }).slickAnimation();
    
})