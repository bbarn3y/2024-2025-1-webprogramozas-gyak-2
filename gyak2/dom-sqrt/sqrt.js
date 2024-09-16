// 1. Tervezés
// 2. DOM
// 3. Számolás / segédfüggvény
// 4. Eseménykezelés
// 5. Validáció
// 6. Stílus

function calculateSQRT(num) {
    return Math.sqrt(num);
}

const buttonEl = document
    .querySelector('#submitButton')
const inputEl = document
    .querySelector('#numberInput')
const resultEl = document
    .querySelector('#result')

buttonEl.addEventListener('click', (event) => {
    if (!!inputEl.value && !isNaN(+inputEl.value)) {
        inputEl.style.border = '';
        // resultEl.innerText =
        //     '<p>' + calculateSQRT(+inputEl.value) + '</p>'
        resultEl.innerHTML =
            `<p>~~${calculateSQRT(+inputEl.value)}~~</p>`
    } else {
        // inputEl
        //     .setAttribute(
        //         'style',
        //         'border: solid 1px red');
        inputEl.style.border = 'solid 1px red';
    }
});
