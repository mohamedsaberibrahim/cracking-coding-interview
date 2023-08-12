/**
 * Deck
 *
 * A class for representing deck of cards
 */

import { Card } from "./Card";

export class Deck {
    private cards: Card[];
    private currentCardIndex: number = 0;

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    dealCard(): Card {
        const card = this.cards[this.currentCardIndex];
        this.currentCardIndex++;
        return card;
    }

    reInsert(cards: Card[]) {
        this.cards = cards;
        this.currentCardIndex = 0;
    }

    shuffle() {
        // should randomize the cards element
    }
}
