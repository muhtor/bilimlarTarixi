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
  
  // Добавляет слушателя событий для таблицы
  var el = document.getElementById("outSide");
  el.addEventListener("click", modifyText);
*/

let selectVata = document.querySelectorAll('.selectVata');
let selectPitta = document.querySelectorAll('.selectPitta');
let selectKapxa = document.querySelectorAll('.selectKapxa');

for (let i = 0; i < selectVata.length; i++) { 
    selectVata[i].onclick = selectValueVata; 
}
function selectValueVata(e){
  // document.querySelector('.out').innerHTML = "VATA";
}

// -----------------------------------------------

for (let i = 0; i < selectPitta.length; i++) { 
    selectPitta[i].onclick = selectValuePitta; 
}
function selectValuePitta(e){
  // document.querySelector('.out').innerHTML = "PITTA";
}

// ---------------------------------------

for (let i = 0; i < selectKapxa.length; i++) { 
    selectKapxa[i].onclick = selectValueKapxa; 
}
function selectValueKapxa(e){
  // document.querySelector('.out').innerHTML = "KAPXA";
}

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    let select = e.target.classList.value;
    if (select !== '') {
        let output = ''
        switch (select) {
            case 'selectVata':
                output = 'VATA'
                break;
            case 'selectPitta':
                output = 'PITTA'
                break;
            case 'selectKapxa':
                output = 'KAPXA'
                break;
        }
        e.target.parentElement.querySelector('.out').innerHTML = output;
    }
});