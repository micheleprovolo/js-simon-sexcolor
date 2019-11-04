// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

var numbers = []

//ciclo che genera 5 numeri casuali da 1 a 100
while (numbers.length  < 5) {
    var random = getRandomIntInclusive (1,100);
    numbers.push(random);
}
console.log(numbers);

alert(numbers);

var time = 30;

var myinterval = setInterval(countdown, 300);

function countdown() {
    time = time - 1;

    if(time == 0) {
        clearInterval(myinterval);
        var user = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
    } else {
        console.log(time);
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}