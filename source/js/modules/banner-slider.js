let mql = window.matchMedia('(max-width: 1023px)');

const bannerSliderElement = document.querySelectorAll('.slider__container');

function initBannerSlider() {
  bannerSliderElement.forEach((element, index) => {
    let autoplay = {
      // Пауза между прокруткой
      reverseDirection: index % 2 === 0,
      delay: 1000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
    };
    let loop = true;
    let bunnerSlider = new window.Swiper(element, {
      direction: mql.matches ? 'horizontal' : 'vertical',
      slidesPerView: 'auto',
      spaceBetween: mql.matches ? 10 : 20,
      init: true,
      // Перетаскивание слайддов вручную
      simulateTouch: false,
      // Бесконечный слайдер
      loop,
      // Автопрокрутка
      autoplay,
      speed: 1000,
    });
    return bunnerSlider;
  });
}

export {initBannerSlider};
