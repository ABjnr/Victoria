/* 
HOW TO SHUFFLE THE ELEMENTS OF AN ARRAY
*/

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
console.log(cards[0]);
// cards.forEach((cards) => console.log(cards));

function shuffle(array) {
  let totalCards = array.length;

  while (totalCards != 0) {
    let randomCard = Math.floor(Math.random() * array.length);
    totalCards -= 1;

    let temp = array[totalCards];
    array[totalCards] = array[randomCard];
    array[randomCard] = temp;
  }
  return array;
}
