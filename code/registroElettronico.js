console.clear();
let voti = Array.from(document.querySelectorAll('#table-voti tbody tr')).map((item, index) => {return {
materia : item.children[1].innerHTML,
voto:item.children[3].children[0].innerHTML.replaceAll(',','.').replaceAll(' ', '')
}});
let sommaVoti = 0;
voti.forEach((item) => {sommaVoti += parseFloat(item.voto)});
console.log("Hai preso " +voti.length + " voti e la tua media è " + (sommaVoti/voti.length).toFixed(3).toString());
let materie = []; 
let votiSommati = []; 
let numeroVoti=[];
for(let i =0; i<voti.length; i++)
{
    let indice = materie.indexOf(voti[i].materia);
    if(indice == -1) 
    {
        materie.push(voti[i].materia); 
        votiSommati.push(parseFloat(voti[i].voto));
        numeroVoti.push(1);
    }
    else
    {
        votiSommati[indice] += parseFloat(voti[i].voto);
        numeroVoti[indice] += 1;
    }
}
let votiTabellaObj = materie.map((item, i) => {
return {
    materia : materie[i],
    voto:(votiSommati[i]/numeroVoti[i]),
    numeroVoti:numeroVoti[i]
    } });
let mediaSommaMaterie = 0;
materie.forEach((item, index)=>{ mediaSommaMaterie += parseFloat(votiSommati[index]/numeroVoti[index])});
mediaSommaMaterie = mediaSommaMaterie / materie.length;
console.log("La media tra le medie è : " + mediaSommaMaterie.toFixed(3).toString());
votiTabellaObj.push({
    materia:"Totale",
    voto: parseFloat(mediaSommaMaterie.toFixed(3)),
    numeroVoti:numeroVoti.reduce((a,b)=>a+b, 0)
})
console.table(votiTabellaObj);
