$(function () {
  /* Burger menu */
  function burgerMenu() {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.menu__list-link');

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

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        //e.preventDefault();
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
        overlay.classList.remove('overlay--show');

        console.log('Был клик по меню');
      });
    });

    // Брейкпойнт, на котором появляется бургер-меню
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
      }
    });

    overlay.addEventListener('click', function () {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
      overlay.classList.remove('overlay--show');
    });
  }
  burgerMenu();

  /* Slider */
  $('.biography__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button class="slick-prev"><svg width="133" height="29" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M133 14.1625H2M2 14.1625L19.6218 1M2 14.1625L19.6218 28" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
  });

  $('.steps__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button class="slick-prev steps__btn-scroll-to"><svg width="133" height="29" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M133 14.1625H2M2 14.1625L19.6218 1M2 14.1625L19.6218 28" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next steps__btn-scroll-to"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
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
    infinite: false,
    prevArrow:
      '<button class="slick-prev"><svg width="133" height="29" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M133 14.1625H2M2 14.1625L19.6218 1M2 14.1625L19.6218 28" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
  });

  $('.situations__inner').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button class="slick-prev"><svg width="133" height="29" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M133 14.1625H2M2 14.1625L19.6218 1M2 14.1625L19.6218 28" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="131" height="27" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.1625H131M131 14.1625L113.378 1M131 14.1625L113.378 28" stroke="white" stroke-width="2"/></svg></button>',
    responsive: [
      {
        breakpoint: 761,
        settings: 'unslick',
      },
    ],
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

  /* Модальное окно */

  function bindModal(trigger, modal, close) {
    (trigger = document.querySelector(trigger)),
      (modal = document.querySelector(modal)),
      (close = document.querySelector(close));

    const overlay = document.querySelector('.overlay');

    trigger.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
      overlay.classList.add('overlay--show');
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      overlay.classList.remove('overlay--show');
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        overlay.classList.remove('overlay--show');
      }
    });

    overlay.addEventListener('click', function () {
      console.log('Закрытие модального окна');
      overlay.classList.remove('overlay--show');
      modal.style.display = 'none';
    });
  }

  // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
  // ВТОРОЙ аргумент - класс самого модального окна.
  // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
  bindModal('.trigger__btn', '.modal', '.modal__close');
  bindModal('.trigger__btn--mobile', '.modal', '.modal__close');
  bindModal(
    '.trigger__success-btn',
    '.modal__success',
    '.modal__success-close'
  );

  /* Cкролл до начала блока steps */
  function scrollToTop() {
    const btnsScrollTo = document.querySelectorAll('.steps__btn-scroll-to');
    const sectionSteps = document.querySelector('#section-steps');

    btnsScrollTo.forEach(s => {
      addEventListener('click', e => {
        console.log('Был клик');
        const secStepsCoords = sectionSteps.getBoundingClientRect();

        window.scrollTo({
          left: secStepsCoords.left + window.pageXOffset,
          top: secStepsCoords.top + window.pageYOffset,
          behavior: 'smooth',
        });
      });
    });
  }

  scrollToTop();
});
