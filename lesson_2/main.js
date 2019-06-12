let elem = document.querySelector('#elem');
let parent = document.querySelector('#parent');

let offsetX;
let offsetY;

elem.addEventListener('dragstart', function (event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
});

elem.addEventListener('dragend', function (event) {
    elem.style.top = ( event.pageY - offsetY) + 'px';
    elem.style.left = ( event.pageX - offsetX) + 'px';
});

let getEnter = document.querySelector('#getEnter').addEventListener('click', getInputValue);

function getInputValue(){
    let inpValue = document.querySelector('#enter').value;
}
