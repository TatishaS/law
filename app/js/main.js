$(function () {
  /* Video modal */
  $('[data-fancybox="video"]').fancybox({
    buttons: ['zoom', 'fullScreen', 'close'],
    thumbs: {
      autoStart: false,
    },
  });

  /* Slider */
  $('.biography__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button style="display: none" class="slick-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
    /*     responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], */
  });

  $('.steps__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button style="display: none" class="slick-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
    responsive: [
      {
        breakpoint: 761,
        settings: 'unslick',
      },
    ],
  });

  $('.cases__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button style="display: none" class="slick-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  /* Map modal */

  var init = false;

  $('.fancybox-map').fancybox({
    buttons: ['close'],
    //openEffect: 'none',
    //closeEffect: 'none',
    beforeLoad: function () {
      if (init) return;
      loadMap('map');
      init = true;
    },
    helpers: {
      title: {
        type: 'inside',
        position: 'bottom',
      },
      media: {},
    },
  });

  function loadMap(target) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      '//api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A236fab0a399cb25aa9dddb7a9d0915c50f1f7106699eeb8d6b4f38f27fd27098&amp;width=600&amp;height=400&amp;lang=ru_RU&amp;scroll=true&id=' +
      target;
    document.head.appendChild(script);
  }

  /* Burger menu */

  function burgerMenu() {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        burger.classList.add('active-burger');
        body.classList.add('locked');
        overlay.classList.add('overlay--show');
      } else {
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
        overlay.classList.remove('overlay--show');
      }
    });
    // Брейкпойнт, на котором появляется бургер-меню
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
      }
    });
  }

  burgerMenu();
});
