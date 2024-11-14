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
let message

if (etàPasseggero < 18) {
  prezzoFinale = prezzoBiglietto * (1 - scontoMinorenni / 100);
  message = `Sei minorenne quindi hai lo sconto del ${scontoMinorenni}%!
  Il prezzo del tuo biglietto è di:€ ${prezzoFinale.toFixed(2)}`
   
} else if (etàPasseggero >= 65) {
   prezzoFinale = prezzoBiglietto * (1 - scontoOver65 / 100);
   message = `Hai più di 65 anni quindi hai lo sconto del ${scontoOver65}%!
   Il prezzo del tuo biglietto è di: € ${prezzoFinale.toFixed(2)} `
   
} else {
  message = `Il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`
}
console.log(message)