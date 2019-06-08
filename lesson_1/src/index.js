window.onload = function(){
    const aside = document.querySelector('#menu');
    aside.onmouseover = menuShow;
    aside.onmouseout = menuHide;
    function menuShow(){ aside.style.left = 0; }
    function menuHide(){ aside.style.left = '-230px'; }

    var arrJson, i, j, x = "";

    arrJson = {
        "nomi" : "S-meva",
        "ihtisosligi" : "mevalar",
        "mahsulot" : [
        {"name" : "multiFructs", "turi" : ['Olma', 'Anjir', 'Anor']},
        {"name" : "OlibKeluvchi", "turi" : ['Akmal', 'Dovud', 'Xakim']}, 
        {"name" : "KeltirilganSana", "turi" : ['10-may', '15-may', '20-may']}, 
        {"name" : "MevaMiqdori", "turi" : ['20-kg', '39-kg', '23-kg']}
        ]
    }
    x += '<h1>' + arrJson.nomi + '</h1>';
    x += '<h1>' + arrJson.ihtisosligi + '</h1>';
    for (i in arrJson.mahsulot) {

        x += '<b>' + arrJson.mahsulot[i].name + '</b><br>';
        for (j in arrJson.mahsulot[i].turi) { 
            x += arrJson.mahsulot[i].turi[j] + '<br>'; }
        }
        document.querySelector('#out').innerHTML = x;
    }

    

