document
    .querySelector('#simpleGetButton')
    .addEventListener('click', () => {
        fetch('http://localhost:8000/ajax_get_receiver.php?city=Budapest&zip=1110')
            .then((response) => response.text())
            .then((htmlContent) => {
                document.querySelector('#simpleGetResult').innerHTML = htmlContent;
            })
    })

const form = document
    .querySelector('#wordForm');
form
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        // fetch('http://localhost:8000/ajax_json_receiver.php', {
        //     method: 'POST',
        //     body: formData
        // }).then((response) => response.json())
        //     .then(result => {
        //         document.querySelector('#wordFormResult tbody').innerHTML =
        //             Object.keys(result).map((value) => {
        //                 return ''
        //             })
        //     });
    });
