$(function () {
  $('.section').each(function () {
    $(this).data('flag', false)
  })
  $('#dowebok').fullpage({
    afterLoad: function (anchorLink, index) {
      if (index == 1 && !$('.s1').data('flag')) {
        $('.s1').data('flag', true)
        $('.welcome').animate({opacity: 1}, 1000, function () {
          $(this).animate({bottom: '400px',marginLeft: '-200px',width: '400px'}, 600, function () {
            $(this).animate({opacity: 0})
            $('.myweb').animate({opacity: 1}, 1000, function () {
              $(this).hide()
              $('.cover').children().animate({marginTop: 0}, 600, function () {
                $('.word').animate({width: '100%'}, 600)
              })
            })
          })
        })
      }

      if (index == 2 && !$('.s2').data('flag')) {
        $('.s2').data('flag', true)
        $('.cover2').children().animate({marginLeft: 0}, 600, function () {
          $('.introduce').transition({opacity:1,translateZ:0,rotateZ:"720deg"},600,function(){
              
          })
        })
      }
      if (index == 3 && !$('.s3').data('flag')) {
        $('.s3').data('flag', true)
        $('.cover3 .c1').animate({marginLeft: 0}, 400)
        $('.cover3 .c2').animate({marginLeft: 0}, 600)
        $('.cover3 .c3').animate({marginLeft: 0}, 800)
        $('.cover3 .c4').animate({marginLeft: 0}, 1000)
        $('.cover3 .c5').animate({marginLeft: 0}, 1200)
      }
    }
  })
})
