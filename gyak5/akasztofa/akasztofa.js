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

const word = 'akasztófa';
const guesses = new Set();

function guess(char) {
    guesses.add(char);

    refreshWord();
    refreshScore();
}

function refreshWord() {
    wordEl.innerHTML = word.split('').map((c) => `<span>
    ${guesses.has(c) ? c : ''}
</span>`).join('')
}

// const initialScore = 0;
function refreshScore() {
    scoreEl.innerHTML = `${wrongGuesses()}/9`
}

function showNextPartOfHangman() {

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



