/**
 * Hand
 *
 * A class for representing hand of cards
 */

import { Card } from "./Card";

export class Hand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    removeCard(card: Card) {
        this.cards = this.cards.filter(card => card.getSuit() !== card.getSuit() && card.getValue() !== card.getValue());
    }
}
