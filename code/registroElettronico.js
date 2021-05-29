
console.clear();
let tabellaVoti = document.getElementById('table-voti');
let body = tabellaVoti.children['tbody'];
body = tabellaVoti.children[1];

let righe = body.children;
let voti = []; for(let riga of righe) { voti.push({

materia : riga.children[1].innerHTML,
voto:riga.children[3].children[0].innerHTML

});}

let sommaVoti = 0;for(let i =0; i<voti.length; i++){ sommaVoti += parseFloat(voti[i].voto)} sommaVoti = sommaVoti/voti.length;console.log("Hai preso " +voti.length + " voti e la tua media è " + sommaVoti);


let materie = []; let votiSommati = []; let numeroVoti=[];for(let i =0; i<voti.length; i++){let indice = materie.indexOf(voti[i].materia);if(indice == -1) {materie.push(voti[i].materia); votiSommati.push(parseFloat(voti[i].voto));numeroVoti.push(1);}else{votiSommati[indice] += parseFloat(voti[i].voto);numeroVoti[indice] += 1;}};
//for(let i = 0; i<materie.length; i++){console.log(materie[i] + ' : ' + (votiSommati[i]/numeroVoti[i]) + ' (' + numeroVoti[i]+')');}

let votiTabellaObj = [];
for(let i=0; i<materie.length; i++)
{
    votiTabellaObj.push({
    materia : materie[i],
    voto:(votiSommati[i]/numeroVoti[i]),
    numeroVoti:numeroVoti[i]
    });
}

let mediaSommaMaterie = 0;
materie.map((item, index)=>{ mediaSommaMaterie += parseFloat(votiSommati[index]/numeroVoti[index])});
mediaSommaMaterie = mediaSommaMaterie / materie.length;

console.log("La media tra le medie è : " + mediaSommaMaterie.toString());

let valFinali = {
    materia:"Totale",
    voto: sommaVoti,
    numeroVoti:numeroVoti.reduce((a,b)=>a+b, 0)
};

votiTabellaObj.push(valFinali );
console.table(votiTabellaObj);
