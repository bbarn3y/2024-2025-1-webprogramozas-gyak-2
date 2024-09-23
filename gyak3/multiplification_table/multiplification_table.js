function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

// Create the table
const inputEl = document.querySelector('#rows');
const tableEl = document.querySelector('#multiTable');

function maximizeValue(inputNumber) {
    const newNumber = Math.min(200, inputNumber);
    inputEl.value = newNumber;
    return newNumber;
}

function selectCell(cellEl) {
    if (cellEl.classList.contains('selected')) {
        cellEl.classList.remove('selected');
    } else {
        cellEl.classList.add('selected');
    }
}

inputEl.addEventListener('input', (event) => {
    console.log('event', event)
    const size = maximizeValue(+event.target.value);
    console.log('size', size);

    tableEl.innerHTML = '';
    for (let i = 1; i <= size; i++) {
        const rowEl = document.createElement('tr')
        for (let j = 1; j <= size; j++) {
            const cellEl = document.createElement('td');
            cellEl.innerText = i*j;
            cellEl.classList.add('cell');
            cellEl.dataset['val'] = i*j;
            // @note Possible memory leak
            // cellEl.addEventListener('click', (e) => {
            //     selectCell(cellEl);
            // })
            rowEl.append(cellEl);
        }
        tableEl.append(rowEl);
    }
})

// @note The foreach will be called on an empty array.
// document
//     .querySelectorAll('.cell')
//     .forEach((cellEl) => {
//         // console.log('cellEl', cellEl);
//         cellEl.addEventListener('click', (event) => {
//            console.log('Cell clicked');
//         })
//     })

// tableEl.addEventListener('click', (event) => {
//     if (event.target.matches('.cell')) {
//         selectCell(event.target);
//     }
// })

delegate(tableEl, 'click', 'td.cell', (e) => {
    console.log('e', e);
    selectCell(e.target)
})







