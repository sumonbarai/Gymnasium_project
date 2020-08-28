$(document).ready(function () {
  // silck slider of banner section
  $('.banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  });

  // banner btn hover
  $('.banner_slider .banner_items .banner_text .banner_btn a:first-child').mouseenter(function () {
    $(this).css({
      'background': 'transparent',
      'border': '1px solid #fff'
    }).siblings().css({
      'background': '#e23e38',
      'border': '1px solid #e23e38'
    });
  });
  $('.banner_slider .banner_items .banner_text .banner_btn a:first-child').mouseleave(function () {
    $(this).css({
      'background': '#e23e38',
      'border': '1px solid #e23e38'
    }).siblings().css({
      'background': 'transparent',
      'border': '1px solid #fff'
    });
  });

  $('.banner_slider .banner_items .banner_text .banner_btn a:last-child').mouseenter(function () {
    $(this).css({
      'background': '#e23e38',
      'border': '1px solid #e23e38'
    }).siblings().css({
      'background': 'transparent',
      'border': '1px solid #fff'
    });
  });
  $('.banner_slider .banner_items .banner_text .banner_btn a:last-child').mouseleave(function () {
    $(this).css({
      'background': 'transparent',
      'border': '1px solid #fff'
    }).siblings().css({
      'background': '#e23e38',
      'border': '1px solid #e23e38'
    });
  });

  //  silck slider of team section

  $('.team_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
     
    ]
  });
  //  silck slider of testimonial section

  $('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

  });

  //  counter up section
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

 //  classes section

 $('#colorful').colorfulTab();

//  classes slider 
 $('.classes .sponcer_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
});















});