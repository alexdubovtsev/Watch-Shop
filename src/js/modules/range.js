//https://refreshless.com/nouislider/examples/

// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {

    const rangeItems = document.querySelectorAll('[data-range]');
    if (rangeItems) {
        rangeItems.forEach(rangeItem => {
            const fromValue = document.querySelector('[data-range-from]');
            const toValue = document.querySelector('[data-range-to]');
            const item = document.querySelector('[data-range-item]');
            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
                connect: true,
                tooltips: [true, true],
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)]
                }
            });
            item.noUiSlider.on('update', function (values, handle) {
                fromValue.value = Math.round(values[[0]]);
                toValue.value = Math.round(values[[1]]);
            });
        });
    }

}
rangeInit();
