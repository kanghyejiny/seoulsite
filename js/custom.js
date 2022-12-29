$(function(){
    // selectLang btn
    $('.language-area .btn-go').click(function(e){
      e.preventDefault();
      const link = $('#selectLang').val();
      window.open(link);
    });

    // slick slide
    // main-visual
    const slide1 = $('.slide1 .visual-slider');
    const slide2 = $('.slide2 .visual-slider');

    $('.sc-visual .slide-title').click(function(){
      $(this).parent().addClass('active').siblings().removeClass('active');

      if($(this).parent().hasClass('slide1')){
        slide2.slick('slickPause');
        if($('.slide1 .btn-control').hasClass('pause')){
          slide1.slick('slickPlay');
        } else {
          slide1.slick('slickPause');
        }
      } else {
        slide1.slick('slickPause');
        if($('.slide2 .btn-control').hasClass('pause')){
          slide2.slick('slickPlay');
        } else {
          slide2.slick('slickPause');
        }
      }
    });
    slide1.slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('.slide1 .btn-prev'),
      nextArrow : $('.slide1 .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
      }
    });
    slide2.slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('.slide2 .btn-prev'),
      nextArrow : $('.slide2 .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
      }
    });
    slide2.slick('slickPause');

    $('.slide1 .btn-control').click(function(e){
      e.preventDefault();
      if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        slide1.slick('slickPause');
      } else {
        $(this).addClass('pause');
        slide1.slick('slickPlay');
      }
    });
    $('.slide2 .btn-control').click(function(e){
      e.preventDefault();
      if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        slide2.slick('slickPause');
      } else {
        $(this).addClass('pause');
        slide2.slick('slickPlay');
      }
    });

    // sidebanner-slider
    $('.sidebanner-slider').slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      slidesToShow: 3,
      prevArrow : $('.sc-sidebanner .btn-prev'),
      nextArrow : $('.sc-sidebanner .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
      }
    });
    $('.sc-sidebanner .btn-control').click(function(e){
      e.preventDefault();
      if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.sidebanner-slider').slick('slickPause');
      } else {
        $(this).addClass('pause');
        $('.sidebanner-slider').slick('slickPlay');
      }
    });

    // sc-visual tab
    $('.sc-visual .group-slide .btn-tab').click(function(e){
      e.preventDefault();
      const data = $(this).data('target');
      $(this).addClass('active').siblings().removeClass('active');
      $(`${data}`).addClass('visible').siblings().removeClass('visible');
    });

    // play button
    $('.btn-play').click(function(e) {
      e.preventDefault();
      $(this).removeClass('active').siblings('.btn-pause').addClass('active');
      $('.visual-slider, .sidebanner-slider').slick('slickPlay');
    });
    $('.btn-pause').click(function(e) {
      e.preventDefault();
      $(this).removeClass('active').siblings('.btn-play').addClass('active');
      $('.visual-slider, .sidebanner-slider').slick('slickPause');
    });

    // sc-site button tab
    $('.sc-site .btn-tab').click(function(e){
      e.preventDefault();
      const sub = $(this).siblings('.site-list-area');
      $(this).parent().toggleClass('active').siblings().removeClass('active');
      if (sub.css('display') === 'none') {
        $('.site-list-area').stop().slideUp();
        $(sub).stop().slideToggle();
      } else {
        $(sub).stop().slideUp();
      }
    });
    $('.site-list-area .site-item:first-child a').keydown(function(e){
      if(e.keyCode === 9 && e.shiftKey) {
        $('.site-list-area').stop().slideUp();
      }
    });
    $('.site-list-area .site-item:last-child a').keydown(function(e){
      if(e.keyCode === 9 && !e.shiftKey) {
        $('.site-list-area').stop().slideUp();
      }
    });

    // btn-top
    let lastScroll = 0;
    $(window).scroll(function() {
      const curr = $(this).scrollTop();
      if(curr > lastScroll) {
        $('#btn-top').addClass('visible');
      } else {
        $('#btn-top').removeClass('visible');
      }
      lastScroll = curr;
    });

    $('#btn-top').click(function() {
      $('html, body').animate({scrollTop: '0'}, 500);
    });
})
