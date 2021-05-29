function calcolaInteresseBaseGiornaliera(valoreIniziale, interessePercentuale, numeroAnni){
    return calcolaInteresse(valoreIniziale, interessePercentuale, numeroAnni, 365);
}

function calcolaInteresseBaseMensile(valoreIniziale, interessePercentuale, numeroAnni){
    return calcolaInteresse(valoreIniziale, interessePercentuale, numeroAnni, 12);
}


function calcolaInteresseBaseAnnuale(valoreIniziale, interessePercentuale, numeroAnni){
    return calcolaInteresse(valoreIniziale, interessePercentuale, numeroAnni, 1);
}


function calcolaInteresse(valoreIniziale, interessePercentuale, numeroAnni, base){
    //base : 365 per giornaliero, 12 mensile, 1 annuale
    let valoreFinale= valoreIniziale;
    let interesse = (100 + interessePercentuale)/100;
    for(let i = 0; i<base * numeroAnni; i++){
        valoreFinale += parseFloat((valoreFinale * interesse)/365);
    }
    return valoreFinale;
}

function calcolaTuttiTipi(valoreIniziale, interessePercentuale, numeroAnni){
    let intAnnuale = calcolaInteresseBaseAnnuale(valoreIniziale, interessePercentuale, numeroAnni);
    let intMensile = calcolaInteresseBaseMensile(valoreIniziale, interessePercentuale, numeroAnni);
    let intGiornaliera = calcolaInteresseBaseGiornaliera(valoreIniziale, interessePercentuale, numeroAnni);

    console.log(
        "Guadagno con Giornaliera: " + (intGiornaliera - valoreIniziale).toString() + 
        "\nGuadagno con Mensile: " + (intMensile - valoreIniziale).toString() + 
        "\nGuadagno con Annuale: " + (intAnnuale - valoreIniziale).toString()
    );
}
