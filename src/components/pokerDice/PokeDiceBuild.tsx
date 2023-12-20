// Poker Dice
import Ace from '../../assets/pokerDice/ace.svg';
import King from '../../assets/pokerDice/king.svg';
import Queen from '../../assets/pokerDice/queen.svg';
import Jack from '../../assets/pokerDice/jack.svg';
import Ten from '../../assets/pokerDice/ten.svg';
import Nine from '../../assets/pokerDice/nine.svg';

export const pokerDie = [Ace, King, Queen, Jack, Ten, Nine];

// const freshDeck = SPADES

// export default class Deck {
//   constructor(cards = freshDeck) {
//     this.cards = cards
//   }

//   get numberOfCards() {
//     return this.cards.length
//   }

//   pop() {
//     return this.cards.shift()
//   }

//   push(card) {
//     this.cards.push(card)
//   }

//   shuffle() {
//     for (let i = this.numberOfCards - 1; i > 0; i--) {
//       const newIndex = Math.floor(Math.random() * (i + 1))
//       const oldValue = this.cards[newIndex]
//       this.cards[newIndex] = this.cards[i]
//       this.cards[i] = oldValue
//     }
//   }
// }
