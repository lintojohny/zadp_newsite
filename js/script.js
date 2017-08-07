$(window).on("load", function() {
    "use strict";


    



// ===================================== Sticky Header =========================================//

$(window).on("scroll", function() {
    if ($(this).scrollTop() > 1){  
     $('.bottom-header.one.hmee').addClass("stick animated fadeInDown");
     var nav_height = $(".bottom-header.one").innerHeight();
     $(".bt-header").css ({
        "height": nav_height
     });
  }
  else{
    $('.bottom-header.one.hmee').removeClass("stick animated fadeOut");
    $(".bt-header").css({
        "height": 0
    });
  }
});

 
 $(window).on("scroll", function(){
    if($(this).scrollTop() > 1) {
      $("header.two.hme").addClass("stickyy animated fadeInDown");
       var nav_height = $("header.two").innerHeight();
       $(".bt2-header").css ({
          "height": nav_height
       });
    }
    else {
      $("header.two.hme").removeClass("stickyy animated fadeOut");
      $(".bt2-header").css({
        "height": 0
      });
    }
 });


// ===================================== Tab Animation =========================================//

$(".nav-tabs li a span").on("click", function(){
    $(".cnt-data").addClass("animated fadeIn");
});



// ===================================== Responsive Menu =========================================//
 

$(".menu-icon img").on("click", function() {
    $(this).parent().toggleClass("mmenu");
    $(".reponsive-menu").toggleClass("slidein");
    return false;
});

$(".reponsive-menu ul ul").parent().addClass("menu-item-has-children");
 $(".reponsive-menu ul li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
});


// ===================================== Expert tabs =========================================//


$(".tab-content2").each(function(){
    var tabb_height = $(this).innerHeight();
    $(this).find(".half-right").css({
    "height":tabb_height
});

$('ul.tabs2 li').on("click", function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs2 li').removeClass('current');
    $('.tab-content2').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
    $(".half-right").addClass("animated slideInRight");
    $(".half-left").addClass("animated slideInLeft");
});

});


// ===================================== Go to Div with animation =========================================//

$('nav, .reponsive-menu').onePageNav({
    currentClass: 'current',
    changeHash: false,
    offset:0,
    scrollSpeed: 1100,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


  $("nav.pull-left ul li:last-child").addClass("crnt");

// ===================================== Testimonial carousel =========================================//

$('.testimonial-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// ===================================== Thumb Slider =========================================//

$('.thumb-carousel').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    // Enable thumbnails
    thumbs: true,
    smartSpeed:1500,
    nav:true,
    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,

    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,

    // Class that will be used on the thumbnail container
    thumbContainerClass: 'owl-thumbs',

    // Class that will be used on the thumbnail item's
    thumbItemClass: 'owl-thumb-item'
});


// ===================================== Progress bar Function =========================================//

$('.skillbar').skillBars({

  // number start
  from: 0,       

  // number end 
  to: false,      

  // animation speed
  speed: 1000,   

  // how often the element should be up<a href="http://www.jqueryscript.net/time-clock/">date</a>d
  interval: 100,    

  // the number of decimal places to show
  decimals: 0,      

  // callback method for every time the element is updated,
  onUpdate: null,   

  // callback method for when the element finishes updating
  onComplete: null,   

  // CSS classes
  classes:{
    skillBarBar : '.skillbar-bar',
    skillBarPercent : '.skill-bar-percent',
  }
  
});


// ===================================== Service and expert tab Left Gap =========================================//

 var gap = $(".container").offset().left;
    $(".service-border, .expert-details").css({
        "padding-left": gap
    });


// ==================================== Side Panel Color Scheme Function ======================================== //

$('.sidepanel ul li').on('click', function(){
     var path = $(this).data('path');
     $('#color-switcher').attr('href', path);
});

$(".sidepanel .side-img").on("click", function(){
  $(this).parent().toggleClass("active");
})




});


