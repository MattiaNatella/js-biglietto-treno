/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const kmUtente = parseInt(prompt('Inserisci i km da percorrere'));
const etàPasseggero = parseInt(prompt('Inserisci l\'eta\' del passeggero'));
const prezzoBiglietto = kmUtente * 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let prezzoFinale = prezzoBiglietto

if (etàPasseggero < 18) {
   prezzoFinale = prezzoBiglietto * (1 - scontoMinorenni / 100);
  
} else if (etàPasseggero > 65) {
   prezzoFinale = prezzoBiglietto * (1 - scontoOver65 / 100);

}
console.log('Il prezzo totale è pari a ', prezzoFinale.toFixed(2))