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

/** Particle JS **/
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#FD5956',
    },
    shape: {
      type: 'star',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 0.3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 0.3,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#D0FEFE',
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
