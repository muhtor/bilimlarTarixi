window.onload = function(){
    var x = "";

   const arrJson = {
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
    for (let i in arrJson.mahsulot) {

        x += '<b>' + arrJson.mahsulot[i].name + '</b><br>';
        for (let j in arrJson.mahsulot[i].turi) { 
            x += arrJson.mahsulot[i].turi[j] + '<br>'; }
        }
        document.querySelector('#outParag').innerHTML = x;
    }