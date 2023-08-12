/**
 * Card
 *
 * A class for representing cards
 */
enum Suit {
    CLUB,
    DIAMOND,
    HEART,
    SPADE
};

export class Card {
    private value: number; // 1 to 13
    private suit: Suit;

    constructor(value: number, suit: Suit) {
        this.value = value;
        this.suit = suit;
    }

    getValue(): number {
        return this.value;
    }

    getSuit(): Suit {
        return this.suit;
    }
}
