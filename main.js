/* ============================
-------------------------------
    kp - Portfolio
    version - 1.0
-------------------------------
=============================*/

/*------- Preloader --------*/
window.addEventListener('load', () => {
  const preloader = document.querySelector("#preloader");
  preloader.classList.add("preload-finish");
});

/*------- Nav bar background change when scroll --------*/
$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
});