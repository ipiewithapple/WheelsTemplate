// FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Header menu

const menuBtn = document.querySelector('.menu');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');
const burger = document.querySelector('.menu__burger');

menuBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--opened');
  burger.classList.toggle('menu__burger--close');
})

// Smooth scrolling

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    const href = el.textContent.replace(' ', '-');
    document.querySelector(`#${href}`).scrollIntoView({block: "center", behavior: "smooth"});
    headerNav.classList.remove('header__nav--opened');
  })
})

