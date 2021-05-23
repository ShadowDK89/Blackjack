class DealerHand extends Hand {
  constructor(stay) {
    super(stay, stay);
  }
  get stay() {
    return this._stay;
  }
  set stay(_stay) {
    this._stay = false;
  }
}
