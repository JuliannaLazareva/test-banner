const blogSliderElement = document.querySelector('.blog__container');

function initBlogSlider() {

  let bunnerSlider = new window.Swiper(blogSliderElement, {
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    },

    // Вертикальный слайдер
    direction: 'vertical',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.blog__container',
    },
  });
  return bunnerSlider;
}

export {initBlogSlider};
