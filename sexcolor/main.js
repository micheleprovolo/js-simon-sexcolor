// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var askName = prompt("Scrivi il tuo nome");
var askSex = prompt("Sei maschio o femmina");

document.getElementById("nome").innerHTML = "Ciao " + askName;

if (askSex === "maschio") {
    document.getElementById("nome").style.color = "blue";

} else if (askSex === "femmina") {
    document.getElementById("nome").style.color = "pink";
}