console.log('Hello world');  
console.log('witam'); //консоль


let bthText = document.querySelector("#buto");

bthText.onclick = function () {
    let text = prompt('Напишите 3 слова');
    alert (`${text}`);
};

let bthNum = document.querySelector("#butos");

bthNum.onclick = function () {
    let texts = prompt ('Напишите только 5 цифер');
    let number = texts.split('');
    alert(`${number}`);
};