/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I tipi principali di datatype in Javascript sono: string (una sequenza di caratteri sottoforma di testo, possono essere 
lettere numeri o simboli, all'inzio e alla fine di una stringa devono essere le virgolette "" oppure gli apici ''); 
number (quasiasi numero, intero o con i decimali compreso tra -(2 alla 53 -1) e +(2 alla 53 -1), può avere valori come 
+ infinity o - infinity per gestire divisioni per 0 oppure NaN che sta per Not a Number per operazioni non eseguibili 
aritmeticamente o nonsense); undefined (cioè viene 
dichiarata la variabile, ma non viene assegnato nessun valore che sarà quindi letteralmente non definito, potendo essere 
qualsiasi cosa); null (valore corrispondente al vuoto, mentre nel caso di undefined la variabile potrebbe contenere qualsiasi 
cosa, nel caso di null viene specificato che non c'è nessun valore al suo interno/assegnato); boolean (i valori possibili sono solo 2, 
o true o false, ne consegue che venga utilizzato in risposta ad un quesito sottoforma di condizione) e 
si è parlato velocemente perchè desueto anche di BigInt (per numeri di grandi dimensioni)  */


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* E' un tipo di dati strutturato, composto da un insieme di chiavi con il corrispondente valore.*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let exercise3 = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Eni";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log (name1 !== name2);
console.log (name1 === name2.toLowerCase());

