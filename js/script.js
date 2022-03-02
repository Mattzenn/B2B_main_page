// Инициализируем Swiper

const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 800,
    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
    },
  
});

// let mySlider = document.querySelector('.swiper');
// let sliderBlock = document.querySelector('.main-banner');

// mySlider.addEventListener('mouseleave', function (e) {
//     sliderBlock.params.autoplay.disableOnInteraction = false;
//     sliderBlock.params.autoplay.delay = 3000;
//     sliderBlock.autoplay.start();
// });

// mySlider.addEventListener('mouseenter', function (e) {
//     sliderBlock.params.autoplay.disableOnInteraction = false;
//     sliderBlock.params.autoplay.delay = 3000;
//     sliderBlock.autoplay.stop();
// });