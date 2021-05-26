let btn = document.getElementById("fetchBtn");
btn.addEventListener('click', eventHandler);

let table = document.getElementById('table');

function eventHandler() {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.responseType = 'json';



    xhr.onload = () => {
        if (xhr.status === 200) {
            let x = xhr.response;
            console.log(x);
        } else {
            console.log("Something Went Wrong ");
        }
    }

    details = '{ "name": "test", "salary": "123", "age": "23" }';
    xhr.send(details);
}