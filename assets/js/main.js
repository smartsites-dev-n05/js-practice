var button = document.getElementsByClassName('popup-btn');
var popup = document.getElementsByClassName('popup');
var closeButton = document.getElementsByClassName('close');
var menuItem = document.getElementsByClassName('menuItem');
var orderItem = document.getElementsByClassName('orderItem');


function addClassTo(e){
    e.preventDefault();
    popup[0].classList.add('open');
    console.log('Open');
}

function removeClassTo(e){
    e.preventDefault();
    popup[0].classList.remove('open');
    console.log('Close');
}

button[0].addEventListener('click', addClassTo);
closeButton[0].addEventListener('click', removeClassTo);

function addOrder(){

}

console.log(menuItem);
console.log(orderItem);