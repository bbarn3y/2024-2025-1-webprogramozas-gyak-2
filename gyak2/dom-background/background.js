const buttonEl = document.querySelector('#setBackground');
const counterEl = document.querySelector('#counter');
const inputEl = document.querySelector('#colorInput');
const linkEl = document.querySelector('#colorHelp');

buttonEl.addEventListener('click', (event) => {
    if (CSS.supports('color', inputEl.value)) {
        document.body.style.background = inputEl.value;
    }
});

linkEl.addEventListener('click', (event) => {
    if (document.body.style.background === 'blue') {
        event.preventDefault();
    }
})

