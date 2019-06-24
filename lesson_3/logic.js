// Функция изменяет содержимое t2
/*
function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "три") {
      t2.firstChild.nodeValue = "два";
    } else {
      t2.firstChild.nodeValue = "три";
    }
  }
  var el = document.getElementById("outSide");
  el.addEventListener("click", modifyText);
*/

/********************** quyidagi alohida function **********************/
/*

let selectVatas = document.querySelectorAll('.selectVata');
let selectPittas = document.querySelectorAll('.selectPitta');
let selectKapxas = document.querySelectorAll('.selectKapxa');
const container = document.querySelector('.row');

container.addEventListener('click', function(e) {
    let select = e.target.classList.value;
    if (select !== '') {
        let output = '';
        switch (select) {
            case 'selectVatas':
                output = 'VATA';
                break;
            case 'selectPittas':
                output = 'PITTA';
                break;
            case 'selectKapxas':
                output = 'KAPXA';
                break;
        }
        e.target.parentElement.querySelector('.out').innerHTML = output;
    }
});
*/

let selectVatalar = document.querySelectorAll('.selectVata');
let selectPittalar = document.querySelectorAll('.selectPitta');
let selectKapxalar = document.querySelectorAll('.selectKapxa');

const outVata = document.getElementById('outVata');
const outPitta = document.getElementById('outPitta');
const outKapxa = document.getElementById('outKapxa');


/*---------------------------------------*/
for (let i = 0; i < selectVatalar.length; i++) {
    selectVatalar[i].onclick = getVataValue;
}
let vataCounter = 0;
function getVataValue(e){
    let select = e.target.value;
    if (select) {
        vataCounter++;
        outVata.innerHTML = vataCounter;
    }
}
/*----------------------------------------*/
for (let i = 0; i < selectPittalar.length; i++) {
    selectPittalar[i].onclick = getPittaValue;
}
let pittaCounter = 0;
function getPittaValue(e){
    let select = e.target.value;
    if (select) {
        pittaCounter++;
        outPitta.innerHTML = pittaCounter;
    }
}
/*-----------------------------------*/
for (let i = 0; i < selectKapxalar.length; i++) {
    selectKapxalar[i].onclick = getKapxaValue;
}
let kapxaCounter = 0;
function getKapxaValue(e){
    let select = e.target.value;
    if (select) {
        kapxaCounter++;
        outKapxa.innerHTML = kapxaCounter;
    }
}
//*********************************************
$('.selectVata').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});
$('.selectPitta').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});
$('.selectKapxa').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});