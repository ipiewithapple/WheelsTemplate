// Variables

const $menuBtn = $('.menu');
const $headerNav = $('.header__nav');
const $navLinks = $('.nav__link');
const $burger = $('.menu__burger');
const $navbar = $('#nav');

// Header menu

$menuBtn.on('click', () => {
  $headerNav.toggleClass('header__nav--opened');
  $burger.toggleClass('menu__burger--close');
})

// Sticky Navbar

const $sticky = $navbar.offset().top;

$(window).on('scroll', () => {
  $(window).scrollTop() > $sticky ? $navbar.addClass('nav--sticky') : $navbar.removeClass('nav--sticky');
})

// Smooth scrolling

$navLinks.each(function () {
  $(this).on('click', (evt) => {
    const dest = $($(this).attr('href'));
    if (dest.length !== 0) {
      evt.preventDefault();
      $('html').animate({
        scrollTop: dest.offset().top
      }, 'slow')
    } else {
      return
    }
    $headerNav.removeClass('header__nav--opened');
    $burger.removeClass('menu__burger--close');
  })
});




