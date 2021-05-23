class Result {
  constructor() {
    this._score = 0;
    this._cards = [];
    this._hasAce = false;
    this._cardAdded = false;
  }
  get cards() {
    return this._cards;
  }
  get score() {
    return this._score;
  }
  get isBust() {
    return this._score > 21 ? true : false;
  }
  get isBlackJack() {
    if (this._score === 21 && this._cards.length === 2) {
      return true;
    }
    return false;
  }
  get hasAce() {
    return this._hasAce;
  }
  get cardAdded() {
    return this._cardAdded;
  }
  set cardAdded(_cardAdded) {
    return (this._cardAdded = true);
  }

  calculateScore = cards => {
    this._cards = cards;
    this._score = 0;

    this._cards.forEach(e => {
      let i = 0;
      this._score += e[i].value;
      if (e[i].value == 1) {
        this._hasAce = true;
      }

      if (this._score + 10 <= 21 && this._hasAce == true) {
        this._score += 10;
      }
      i++;
    });
  };
}
