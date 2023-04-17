const bottone = document.getElementById("calcola");
const annulla = document.getElementById("reset");

let x = 0;

bottone.addEventListener("click", function(){

    const prezzoPerKm = 0.21;
    let nome = document.getElementById("name").value;
    let distanza = parseInt( document.getElementById("km").value );
    let prezzo = 0;

    if( isNaN(distanza) ) {
        console.error("I chilometri non sono corretti");
    }
    
    console.log(`${nome} vuole percorrere ${distanza} km`);

    prezzo = distanza * prezzoPerKm;
    console.log(`Prezzo di base: ${prezzo}`);

    let fasciaEta = document.getElementById("fasciaEta").value;

    let offerta = "Biglietto Standard";

    if( fasciaEta=="1" ) {
        offerta = "Biglietto Junior";
        prezzo *= 0.8;
    } else if ( fasciaEta=="3") {
        offerta = "Biglietto Senior";
        prezzo *= 0.6;
    }
    prezzo = prezzo.toFixed(2);

    console.log("Offerta: " , offerta);
    console.log(`Prezzo scontato: ${prezzo}`);

    document.getElementById("bigliettoPasseggero").innerText = nome;
    document.getElementById("bigliettoOfferta").innerText = offerta;
    document.getElementById("bigliettoCosto").innerText = prezzo;

} );

annulla.addEventListener("click", function() {
    
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fasciaEta").value = "";


});