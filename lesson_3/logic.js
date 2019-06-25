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
let resultTD;
resultTD = document.querySelectorAll('.result');


/*
/ ----------- quyidagi alohida function ----------- /
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



/************* This function for td style display none ************/
let tdAnswer = document.querySelectorAll('.prettyCheckbox');
for (let i = 0; i < tdAnswer.length; i++) {
    tdAnswer[i].onclick = tdAnswerFalse;
}

function tdAnswerFalse() {
    this.style.left = '135px';

}
/************* td function end ***********/

const outVata = document.getElementById('outVata');
const outPitta = document.getElementById('outPitta');
const outKapxa = document.getElementById('outKapxa');


/*---------------------------------------*/
let vataCounter = 0;
for (let i = 0; i < selectVatalar.length; i++) {
    selectVatalar[i].onclick = function (e){
        let select = e.target.value;
        for (let j = 0; j < resultTD.length; j++) { resultTD[i].innerHTML = select; }
        if (select) { vataCounter++; }
        outVata.innerHTML = vataCounter;
    };
}
/*----------------------------------------*/
let pittaCounter = 0;
for (let i = 0; i < selectPittalar.length; i++) {
    selectPittalar[i].onclick = function (e){
        let select = e.target.value;
        for (let j = 0; j < resultTD.length; j++) { resultTD[i].innerHTML = select; }
        if (select) { pittaCounter++; }
        outPitta.innerHTML = pittaCounter;
    }
}

/*-----------------------------------*/
let kapxaCounter = 0;
for (let i = 0; i < selectKapxalar.length; i++) {
    selectKapxalar[i].onclick = function (e){
        let select = e.target.value;
        for (let j = 0; j < resultTD.length; j++) { resultTD[i].innerHTML = select; }
        if (select) { kapxaCounter++;}
        outKapxa.innerHTML = kapxaCounter;
    }
}