"use strict"
function convertCurrency(){
    var pul=document.getElementById("pulMiqdori").value;
    var valyuta=document.getElementById("valyutaSelect").value;

    document.getElementById("convertedPul").innerText = pul;
    document.getElementById("convertedValyuta.valyutaKursi()").innerText = valyuta;
}
function valyutaKursi(){
    if(valyuta===1){
        var pul=pul/12000;
    }
    else{
        if(valyuta===2){
            var pul=pul/10000;
        }
        else{
            if(valyuta===3){
                var pul=pul/8000;
            }
        }
    }
}
