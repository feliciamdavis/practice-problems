/**
 * Print a random playing card from deck.(Suit, Value, emoji?)
 */

const SPADE = '♠';
const HEART = '♥';
const CLUB = '♣';
const DIAMOND = '♦';
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = [SPADE, HEART, CLUB, DIAMOND];

class PlayingCard {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (const SUIT of SUITS) {
            for (const VALUE of VALUES) {
                const card = new PlayingCard(SUIT, VALUE);
                this.cards.push(card);
            }
        }
    }
    removeCard() {
        const cardAt = Math.floor(Math.random() * this.cards.length);
        const card = this.cards[cardAt];
        this.cards.splice(cardAt, 1);
        return card;
    }
}

const deck = new Deck();
const card = deck.removeCard();
console.log(card);