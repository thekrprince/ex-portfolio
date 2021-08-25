/* ============================
-------------------------------
    kp - Portfolio
    version - 1.0
-------------------------------
=============================*/

/*------- Preloader --------*/
window.addEventListener('load', () => {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('preload-finish');
});

/*------- Nav section -------*/
var navLinks = document.querySelectorAll('.nav-link');
var sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((nav) => {
    nav.classList.remove('active');
    if (nav.classList.contains(current)) {
      nav.classList.add('active');
    }
  });
});

/*------- Nav bar background change when scroll --------*/
$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// window.onscroll(function () {
//   var headerClass = document.querySelector('.header-section');
//   if (headerClass.scrollTop > '50px') {
//     headerClass.classList.toggle('scrolled');
//   }
// });
