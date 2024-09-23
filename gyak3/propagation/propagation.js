const outerRectangleEl =
    document.getElementById('outerRectangle');
const innerRectangleEl =
    document.getElementById('innerRectangle');

document.addEventListener('click', (event) => {
    console.log('document', event, this);
})

outerRectangleEl.addEventListener('click', (event) => {
    console.log('outerRectangleEl', event, this);
    event.stopPropagation();
})

innerRectangleEl.addEventListener('click',
    function (event) {
        console.log('innerRectangleEl', event, this);
    }
)
