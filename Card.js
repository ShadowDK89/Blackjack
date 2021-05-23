class Card {
  constructor(value, symbol) {
    this._value = value;
    this._symbol = symbol;
  }
  get isAce() {
    if (this._value === 1) return true;
  }
}
