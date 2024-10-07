// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        console.log('d', this, event.target);
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

// Init
const wordEl = document.getElementById('szo');
const scoreEl = document.getElementById('eredmeny');
const svgEl = document.querySelector('svg');

const word = 'akasztófa';
const guesses = new Set();

function guess(char) {
    guesses.add(char);

    refreshWord();
    refreshScore();
    showNextPartOfHangman();

    if (playerWin()) {
        wordEl.classList.add('nyer');
    }
}

function playerLost() {
    return wrongGuesses() >= 9;
}

function playerWin() {
    return word.split('').every((c) => guesses.has(c));
}

function refreshWord() {
    wordEl.innerHTML = word.split('').map((c) => `<span
        ${playerLost() && !guesses.has(c) ? 'class="hianyzo"' : ''}>
    ${guesses.has(c) || playerLost() ? c : ''}
</span>`).join('')
}

// const initialScore = 0;
function refreshScore() {
    scoreEl.innerHTML = `${wrongGuesses()}/9`
}

function showNextPartOfHangman() {
    for (let i = 0; i < wrongGuesses(); i++) {
        svgEl.children[i].classList.add('rajzol');
    }
}

function wrongGuesses() {
    return [...guesses].reduce((partialCount, char) =>
        !word.includes(char) ? partialCount + 1 : partialCount, 0);
}


document.addEventListener('keyup', (event) => {
    // console.log(event);
    const char = event.key;

    guess(char);

});

refreshWord();
refreshScore();



