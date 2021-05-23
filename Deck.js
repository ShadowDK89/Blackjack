class Deck {
  constructor() {
    this._cards = [];
  }
  newDeck = () => {
    this._cards = [];
    this._symbol = 127137;
    this._value = 0;
    for (let i = 1; i <= 4; i++) {
      this._value = 0;
      if (i === 2) {
        this._symbol = 127153;
      } else if (i === 3) {
        this._symbol = 127169;
      } else if (i === 4) {
        this._symbol = 127185;
      }

      for (let j = 0; j < 13; j++) {
        if (j === 11) {
          ++this._symbol;
        }
        if (this._value < 10) {
          this._value++;
        }
        this._cards.push({
          value: this._value,
          symbol: "&#" + this._symbol
        });
        this._symbol++;
      }
    }
  };

  shuffleCards = () => {
    let tmpDeck = this._cards.slice();
    this._cards = [];
    while (tmpDeck.length > 0) {
      let getCard = Math.ceil(Math.random() * tmpDeck.length - 1);
      let card = tmpDeck.splice(getCard, 1);
      this._cards.push(card);
    }
  };

  drawCard = () => {
    let card = this._cards.shift();
    return card;
  };

  get cards() {
    return this._cards;
  }
}
