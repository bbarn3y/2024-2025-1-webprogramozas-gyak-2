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

const guesses = new Set();

function guess(char) {

}

function refreshWord() {

}

function refreshScore() {

}

function showNextPartOfHangman() {

}


document.addEventListener('keyup', (event) => {
    // console.log(event);
    const char = event.key;

    guess(char);

});



