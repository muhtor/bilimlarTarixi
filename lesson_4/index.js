let outVata = document.getElementById('outVata');
let outPitta = document.getElementById('outPitta');
let outKapxa = document.getElementById('outKapxa');


let selectVatalar = document.getElementsByClassName('selectVata');
for (let i = 0; i < selectVatalar.length; i++) { selectVatalar[i].onchange = selectValueVata; }

var resultVata = 0;
function selectValueVata() {
    let res = parseInt(this.value);
    resultVata += res;
    outVata.innerHTML = resultVata;
}

$('.selectVata').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});
/*---------------------------------------------------------------*/
let selectPittalar = document.getElementsByClassName('selectPitta');
for (let i = 0; i < selectPittalar.length; i++) { selectPittalar[i].onchange = selectValuePitta; }
var resultPitta = 0;
function selectValuePitta() {
    let res = parseInt(this.value);
    resultPitta += res;
    outPitta.innerHTML = resultPitta;
}

$('.selectPitta').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});
/*----------------------------------------------------------------*/
let selectKapxalar = document.getElementsByClassName('selectKapxa');
for (let i = 0; i < selectKapxalar.length; i++) { selectKapxalar[i].onchange = selectValueKapxa; }
var resultKapxa = 0;
function selectValueKapxa() {
    let res = parseInt(this.value);
    resultKapxa += res;
    outKapxa.innerHTML = resultKapxa;
}

$('.selectKapxa').on('change', function () {
    var $this = $(this);
    if ($this.prop('disabled')) {
        return false;
    }
    $this.prop('disabled', true);
});



