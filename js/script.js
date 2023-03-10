// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Stampo in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // Multipli di 3 e di 5
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // Multipli di 3
        console.log("Fizz")
    } else if (i % 5 === 0) {
        // Multipli di 5
        console.log("Buzz");
    } else {
        // Tutti gli altri numeri
        console.log(i);
    }
}