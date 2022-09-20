$(function () {
  // Разрешаем скролл заднего фона при открытом модальном окне
  function enableScroll() {
    const body = document.body;
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');

    window.scroll({ top: pagePosition, left: 0 });
    //body.removeAttribute('data-position');
  }
  // Запрещаем скролл заднего фона при открытом модальном окне
  function disableScroll() {
    const body = document.body;
    //body.removeAttribute('data-position');
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  }

  /* Burger menu */
  function burgerMenu() {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    const overlay = document.querySelector('.overlay');
    //const body = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.menu__list-link');

    function hideBurgerMenu() {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      overlay.classList.remove('overlay--show');
    }

    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        burger.classList.add('active-burger');

        overlay.classList.add('overlay--show');
      } else {
        hideBurgerMenu();
      }
    });
    /* Cкрываем мобильное меню по нажатию на ссылку в меню */
    menuLinks.forEach(link => {
      link.addEventListener('click', hideBurgerMenu);
    });

    // Брейкпойнт, на котором появляется бургер-меню
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
      }
    });

    overlay.addEventListener('click', hideBurgerMenu);
  }

  /* Плавный скролл до якоря при клике на пункт меню */
  function scrollToAnchor() {
    const links = document.querySelectorAll('a.anchor');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 80; // отступ от верха страницы
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

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

  /* Модальное fancybox окно - карта */
  let init = false;

  function showPreloader() {
    const block = document.querySelector('.fancybox-map');
    block.classList.add('loading');
  }

  function removePreloader() {
    const block = document.querySelector('.fancybox-map');
    block.classList.remove('loading');
  }

  function loadMap(target) {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src =
      '//api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A236fab0a399cb25aa9dddb7a9d0915c50f1f7106699eeb8d6b4f38f27fd27098&amp;width=600&amp;height=400&amp;lang=ru_RU&amp;scroll=true&id=' +
      target;
    document.head.appendChild(script);
  }
  $('.fancybox-map').fancybox({
    buttons: ['close'],

    beforeLoad: function () {
      showPreloader();
      if (init) return;
      loadMap('map');
      init = true;
    },

    afterLoad: function () {
      setTimeout(function () {
        removePreloader();
      }, 2500);
    },

    helpers: {
      title: {
        type: 'inside',
        position: 'bottom',
      },
      media: {},
    },
  });

  /* Окно сообщения об успешной отправке */
  function successModal() {
    const modalSuccess = document.querySelector('.modal__success');
    const modalForms = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');

    const modalSuccessClose = document.querySelector('.modal__success-close');
    modalForms.forEach(form => {
      form.style.display = 'none';
    });
    modalSuccess.style.display = 'block';
    overlay.classList.add('overlay--show');
    disableScroll();

    const handleModalSuccess = elem => {
      enableScroll();
      modalSuccess.style.display = 'none';
      overlay.classList.remove('overlay--show');

      elem.removeEventListener('click', handleModalSuccess);
    };

    modalSuccessClose.addEventListener('click', () =>
      handleModalSuccess(modalSuccessClose)
    );

    overlay.addEventListener('click', () => handleModalSuccess(overlay));
  }

  /* Модальное окно */
  function bindModal(trigger, modal, close) {
    (trigger = document.querySelectorAll(trigger)),
      (modal = document.querySelector(modal)),
      (close = document.querySelectorAll(close));

    if (!trigger || !modal) return;

    const overlay = document.querySelector('.overlay');

    const hideModal = elem => {
      //console.log('Навешан обработчик');
      enableScroll();
      modal.style.display = 'none';
      overlay.classList.remove('overlay--show');
      elem.removeEventListener('click', hideModal);
    };

    trigger.forEach(t => {
      t.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'block';
        overlay.classList.add('overlay--show');
        disableScroll();

        /* Обработка клика на кнопку "закрыть" */
        close.forEach(btn => {
          btn.addEventListener('click', () => hideModal(btn));
        });

        /* Обработка клика на модальное окно */
        modal.addEventListener('click', e => {
          if (e.target === modal) {
            hideModal(modal);
          }
        });

        /* Обработка клика на оверлей */
        overlay.addEventListener('click', function () {
          hideModal(overlay);
        });
      });
    });
  }

  /* Скрипт для отправки формы */
  function formSubmit() {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
      form.addEventListener('submit', formSend);

      async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);

        let resp = await fetch('sendmail.php', {
          method: 'POST',
          body: formData,
        });

        successModal(); //временно, после перенесется ниже внутрь условия resp.ok
        e.target.reset(); //временно
        // ВРЕМЕННО ЗАКОММЕНТИРОВАНО ДО ПЕРЕНОСА НА ХОСТИНГ
        /* if (resp.ok) {
          let result = await resp.json();
        } else {
          alert('Ошибка отправки формы');
        }  */
      }
    });
  }

  /* Cкролл до начала блока steps */
  function scrollToTopSteps() {
    const btnsScrollTo = document.querySelectorAll('.steps__btn-scroll-to');
    const sectionSteps = document.querySelector('#section-steps');

    btnsScrollTo.forEach(s => {
      s.addEventListener('click', () => {
        const secStepsCoords = sectionSteps.getBoundingClientRect();
        console.log(secStepsCoords);
        console.log(window.pageXOffset);

        window.scrollTo({
          left: secStepsCoords.left + window.pageXOffset,
          top: secStepsCoords.top + window.pageYOffset,
          behavior: 'smooth',
        });
      });
    });
  }

  /* Подсветка активной ссылки в меню хлебных крошек */
  function setBreadcrumbsLink() {
    const links = document.querySelectorAll('.breadcrumbs-link');

    links.forEach(link => {
      link.addEventListener('click', () => {
        link.classList.remove('active');
      });
    });
  }

  /* Вызовы функций */

  burgerMenu();
  scrollToAnchor();
  scrollToTopSteps();
  setBreadcrumbsLink();
  // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
  // ВТОРОЙ аргумент - класс самого модального окна.
  // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
  bindModal('.trigger__btn', '.modal__request', '.modal__close');
  bindModal('.trigger__btn--mobile', '.modal__request', '.modal__close');
  bindModal('.trigger__cases-btn', '.modal__download', '.modal__close');
  bindModal('.trigger__biography-btn', '.modal__download', '.modal__close');
  formSubmit();
});
