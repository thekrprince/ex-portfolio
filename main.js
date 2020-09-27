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


$(".nav .nav-link").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).addClass("active");
});