class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * i);

        let temp = this.cards[i];
        this.cards[i] = this.cards[random];
        this.cards[random] = temp;
      }
      return this.cards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1.localeCompare(card2) === 0) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
