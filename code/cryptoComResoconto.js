let fs = require("fs");
let rawData, lines, monete, coppie;
console.clear();
fs.readFile("SPOT_ORDER.csv", 'utf-8', function (err, data) {
    rawData = data.split("\n");
    lines = rawData.map((item) => item.split(','))
    lines = lines.filter((item) => item[15] == "FILLED");//prendo solo quelli che hanno funzionato
    monete = lines.map((item) => item[3]);
    monete = [...new Set(monete)];
    coppie = monete.map((item) => { return { 'coppia': item, 'quantita': 0, 'spesa': 0, 'venduto': false } });
    
    //calcolo le quantità legate alle monete
    lines.forEach((item) => {
        let indiceCoppia = coppie.findIndex((coppia) => coppia.coppia == item[3]);
        if (indiceCoppia != -1 && item[5] == "BUY") {
            coppie[indiceCoppia].quantita += parseFloat(item[7]);
            coppie[indiceCoppia].spesa += parseFloat(item[6] * item[7]);
        }
        else if (indiceCoppia != -1 && item[5] == "SELL") {
            coppie[indiceCoppia].quantita -= parseFloat(item[7]);
            coppie[indiceCoppia].spesa -= parseFloat(item[6] * item[7]);
            coppie[indiceCoppia].venduto = true;
        }
    });

    let coppieInForse = [];
    coppie.forEach((item) => {
        let risultato = "PERSO(comprato senza vendere)";
        if (item.spesa < 0)
            risultato = "GUADAGNATO";
        if (item.venduto)
            console.log("Grazie alla coppia " + item.coppia + " hai " + risultato + " " + Math.abs(item.spesa).toString() + item.coppia.split("_")[1]);
        else
            coppieInForse.push(item.coppia.split("_")[0]);
    });
    console.log("Hai comprato senza mai vendere : " + coppieInForse.join(","));

});
