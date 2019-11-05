// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

//array vuoto da riempire con numeri casuali
var numbers = []

//ciclo che genera 5 numeri casuali da 1 a 100
while (numbers.length  < 5) {
    var random = getRandomIntInclusive (1,100);
    numbers.push(random);
}
console.log(numbers);


//alert che richiama i numeri casuali generati dentro l'array numbers
alert(numbers);

//inizializzo a 0 la variabile user
var user = 0;

//prima di iniziare l'utente non ha ancora trovato nemmeno un numero
var trovato = false;

//creo array vuoto da riempire con i numeri che l'utente ha memorizzato correttamente
var numeriTrovati = [];

//imposto conto alla rovescia asincrono di 30 secondi
setTimeout(countdown, 1000);

function countdown() {
    alert("Tempo scaduto!")
    
    for (var i = 0; i < 5; i++) {
        user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
        console.log("L'utente ha inserito " + user);

        if (numbers [i] === user) {
            trovato = true;
            numeriTrovati.push(user);
            console.log("Hai beccato il numero");

        } else {
            console.log("Non hai beccato il numero");
        }

    }
    console.log("Questi sono i numeri che hai azzeccato " + numeriTrovati + " ed hai così ottenuto " + numeriTrovati.length + " punti");

    if(numeriTrovati.length === numbers.length) {
        console.log("Hai indovinato tutti i numeri!");
    } else if (numeriTrovati.length === 0) {
        console.log("Non hai indovinato nemmeno un numero!");
    }
}


// if (trovato == true) {
//     console.log("Il tuo punteggio è di " + score);
    
// }



//BLOCCO FUNZIONI

//funzione che genera un numero casuale compreso fra un min e max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per controllare un valore dentro un array: restituisce true o false
function findInArray (value, array) {
    var found = false;
    var i = 0;
    while (found == false && i < array.length) {
            if (array[i] == value) {
                    found = true;
            }
            i++
    }
      return found;      
}


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

   // for (var i = 0; i < 5; i++) {

    // user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));

    // console.log(user);

//         if (numbers.includes(user) == true){
//             console.log("Hai beccato il numero");
//             trovato = true;
    
//         } else {
//             console.log("Non hai beccato il numero");
//         }
            
//     }
//     if (trovato == true) {
//         console.log("Il tuo punteggio è di " + score);  
//     }


// }