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

$('#nav-menu ul li a').click(function () {
  $('active').removeClass('active');
  $(this).addClass('active');
});
$(window).scroll(function () {
  var href = $(this).scrollTop();
  $('.link').each(function (event) {
    if (href >= $($(this).attr('href')).offset().top - 1) {
      $('active').removeClass('active');
      $(this).addClass('active');
    }
  });
});