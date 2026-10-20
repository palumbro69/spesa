let totale=0;

function compra(){
let costo=0;

do{
    costo= prompt("inserisci prezzo");
    

}while(costo < 0 || costo == null ||  isNaN(costo) || costo == "");

costo=parseFloat(costo)
totale=parseFloat(totale)

totale += costo
console.log("totale: " + totale);

let paragrafo;
paragrafo= document.getElementById("risultato")

paragrafo.innerHTML


}
