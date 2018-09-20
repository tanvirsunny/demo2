$(document).ready(function(){
    $('.navbar-toggler').click(function() { 
          $(this).toggleClass('active');
    });

    $(window).scroll(function(){
      if($(document).scrollTop()>150){

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
})
