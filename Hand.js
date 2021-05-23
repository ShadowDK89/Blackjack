class Hand {
  constructor() {
    this._cards = [];
    this._stay = false;
    this._result = new Result();
  }

  get Result() {
    return this._result;
  }

  get stay() {
    if (this._stay === true) {
      return true;
    } else if (this._result.isBust == true) {
      return true;
    } else if (this._result.isBlackJack == true) {
      return true;
    }
    return this._stay;
  }
  set stay(stay) {
    this._stay = stay;
  }
  addCard = deck => {
    this._result.cardAdded = false;
    if (this._result != false) {
      let card = deck.drawCard();
      this._cards.push(card);
      this._result.calculateScore(this._cards);
      this._result.cardAdded = true;
    }
  };
  get Cards() {
    return this._cards;
  }
}
