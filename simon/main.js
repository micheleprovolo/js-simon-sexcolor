// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

//array vuoto
var numbers = []

//ciclo che genera 5 numeri casuali da 1 a 100
while (numbers.length  < 5) {
    var random = getRandomIntInclusive (1,100);
    numbers.push(random);
}
console.log(numbers);


//alert che recepisce i numeri casuali generati dentro l'array
alert(numbers);

//imposto conto alla rovescia asincrono
setTimeout(countdown, 1000);

var user = 0;

var trovato = false;

var score = 0;

function countdown() {
    alert("Tempo scaduto!")

        for (var i = 0; i < 5; i++) {
        user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
        console.log(user);
            if (numbers.includes(user) == true){
                console.log("Hai beccato il numero");
                trovato = true;
        
            } else {
                console.log("Non hai beccato il numero");
            }

        if (trovato == true) {
            console.log("Il tuo punteggio è di " + score);
                
        }    
    }


}







// var numeriTentati = [];
//         numeriTentati.push(user);
//         console.log(user);
//         console.log(numeriTentati);


//conto alla rovescia di 30 secondi
// var time = 30;

// var myinterval = setInterval(countdown, 50);

// function countdown() {
//     time = time - 1;


//     if(time == 0) {
//         clearInterval(myinterval);
//         for (var i = 0; i < 5; i++) {
//             var user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
//             numeriTentati.push(user);
//         }

//     } else {
//         console.log(time);
//     }
// }


// var numeriTentati = [];
// console.log(numeriTentati);





//BLOCCO FUNZIONI

//funzione che genera un numero casuale compreso fra un min e max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}









// var time = 30;

// var myinterval = setInterval(countdown, 300);

// function countdown() {
//     time = time - 1;

//     if(time == 0) {
//         clearInterval(myinterval);
//         var user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
//     } else {
//         console.log(time);
//     }
// }
