/* Документация слайдера: https://swiperjs.com/ */

// Подключаем слайдер Swiper из node_modules
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
/* Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";  
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Parallax, Autoplay],

			// effect: 'fade',

			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,
			},
			
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.fraction-controll__all');
					const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			}
		});
	};

	if (document.querySelector('.products-slider__slider')) {
		new Swiper('.products-slider__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			// effect: 'fade',
	
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-slider__dotts',
				clickable: true,
				dynamicBullets: true,

			},
			
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				  //autoHeight: true,
				},
				// when window width is >= 768px
				768: {
				  slidesPerView: 2,
				  spaceBetween: 30
				},
				// when window width is >= 992px
				992: {
				  slidesPerView: 3,
				  spaceBetween: 40,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},

	
			on: {
				init: function(swiper) {

				}
			}
		});
	};

	if (document.querySelector('.products-new__slider')) {
		new Swiper('.products-new__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			// effect: 'fade',
	
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true,

			},
			
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				  //autoHeight: true,
				},
				// when window width is >= 768px
				768: {
				  slidesPerView: 1,
				  spaceBetween: 30
				},
				// when window width is >= 992px
				992: {
				  slidesPerView: 2,
				  spaceBetween: 30,
				},
				1370: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},

	
			on: {
				init: function(swiper) {

				}
			}
		});
	};

	if (document.querySelector('.products-recommend__slider')) {
		new Swiper('.products-recommend__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			// effect: 'fade',
	
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},



			// Dotts
			pagination: {
				el: '.products-recommend__dotts',
				clickable: true,
				dynamicBullets: true,

			},
			
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				  //autoHeight: true,
				},
				// when window width is >= 768px
				768: {
				  slidesPerView: 2,
				  spaceBetween: 30
				},
				// when window width is >= 992px
				992: {
				  slidesPerView: 3,
				  spaceBetween: 40,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},

	
			on: {
				init: function(swiper) {

				}
			}
		});
	};

	if (document.querySelector('.thumbs-imgs')) {
		const thumbsSwiper = new Swiper('.thumbs-imgs', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],

			// effect: 'fade',
	
			// autoplay: {
			// 	delay: 8000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 4,
			spaceBetween: 16,
			autoHeight: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},



			// Dotts
			pagination: {
				el: '.products-recommend__dotts',
				clickable: true,
				dynamicBullets: true,

			},
			
			breakpoints: {
				// when window width is >= 992px
				992: {
				  slidesPerView: 3,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},

	
			on: {
				init: function(swiper) {

				}
			}
		});
		new Swiper('.imgs-product__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],

			// effect: 'fade',
	
			// autoplay: {
			// 	delay: 8000,
			// 	disableOnInteraction: false,
			// },
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},


			
	
			on: {
				init: function(swiper) {

				}
			}
		});
	};


}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});