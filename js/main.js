const bottone = document.getElementById("calcola");
const annulla = document.getElementById("reset");

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

/************************ FINE ESERCIZIO ********************/

/* ESEMPI DI SCOPE: GLOBALE vs BLOCK */
//Questa è globale, vale per let/const/var
let x = 0;

console.log("X: ", x); //X visibile qui

if(true) {
    x = 42;  //X visibile qui
    
    //dichiarata qui: var = globale. Fuori dal blocco, esiste.
    var y = 123;

    //dichiarata qui: let/const = block. Fuori dal blocco, muore.
    let z = 42;

    console.log("Y:", y); //visibile, siamo nello stesso scope
    console.log("Z:", z); //visibile, siamo nello stesso scope
}

console.log("X: ", x);  //X visibile qui (è globale)
console.log("Y:", y);   //Y visibile qui (è globale)
// console.log("Z:", z);   //Z NON visibile qui (è block)

let visibileInFunzioneA = 1; //Questa è globale, vale per let/const/var, sarà visibile in funzione
annulla.addEventListener("fintoClick", function() {
    
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fasciaEta").value = "";

    console.log("VisibileInFunzioneA", visibileInFunzioneA); //é visibile, perchè globale
    let abc = 42; //siamo in funzione, quindi è tutto function-scope (let/const/var sono uguali) e muore fuori da function
    var xyz = 41; //siamo in funzione, quindi è tutto function-scope (let/const/var sono uguali) e muore fuori da function
    console.log("ABC:", abc); //visibile
    console.log("XYZ:", xyz); //visibile

});
// console.log("ABC:", abc); //NON visibile qui
// console.log("XYZ:", xyz); //NON visibile qui