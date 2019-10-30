// FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Header menu

const burgerBtn = document.querySelector('.menu');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');

burgerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--opened');
})

// navLinks.forEach((el) => {
//   el.addEventListener('click', () => {
//     headerNav.classList.remove('header__nav--opened');
//   })
// })

// Scroll

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    const href = el.textContent.replace(' ', '-');
    document.querySelector(`#${href}`).scrollIntoView({block: "center", behavior: "smooth"});
    headerNav.classList.remove('header__nav--opened');
  })
})

