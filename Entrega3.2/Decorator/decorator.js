const conversio = require('./currency_conversion.json');

function convertir(producte) {
    const divises = Object.keys(conversio);
    const coincidencia = divises.find(divisa => divisa.slice(0, 3) === producte.divisa);
    let preuEuros = producte.preu * conversio[coincidencia];
    
    let conversioFinal = console.log(`${producte.nom} amb un preu de ${producte.preu} ${producte.divisa} convertir a ${preuEuros.toFixed(2)} EUR`);
    
    return conversioFinal;
}

module.exports = convertir;