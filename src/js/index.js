// FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Variables

const menuBtn = document.querySelector('.menu');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');
const burger = document.querySelector('.menu__burger');
const navbar = document.querySelector('#nav');

// Header menu

menuBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--opened');
  burger.classList.toggle('menu__burger--close');
})

// Smooth scrolling

navLinks.forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    const href = el.textContent.replace(' ', '-');
    document.querySelector(`#${href}`).scrollIntoView({ block: "start", behavior: "smooth" });
    burger.classList.remove('menu__burger--close');
    headerNav.classList.remove('header__nav--opened');
  })
})

// Sticky Navbar

const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('nav--sticky');
  } else {
    navbar.classList.remove('nav--sticky');
  }
})

