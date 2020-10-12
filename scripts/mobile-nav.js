$(function(){
  $('.mobile-nav').on('click', () => {
    $('.js-nav').slideToggle(400)
  })

  // Add Scroll behaviour
   // from https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
  $('nav').on('click', 'a[href^="#"]', function (e) {

    e.preventDefault()

    const $targetHref = $(this).attr('href')
		$('html, body').animate(
			{
				scrollTop: $($targetHref).offset().top,
			},
			1000
		)
  })
})
