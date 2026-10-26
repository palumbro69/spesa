let totale=0;

function compra(){

    let costo;
   
    costo= document.getElementById("prezzo").value;
    if(costo<0){
        costo=0;
    }
   

    costo=parseFloat(costo)
    
    totale += costo
    console.log("totale: " + totale);

    document.getElementById("risultato").innerText = totale + "€";

    document.getElementById("prezzo").value= "";

}

function azzera(){

totale=0;
document.getElementById("risultato").innerText = totale + "€"


}
