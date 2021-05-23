class Table {
  constructor() {
    this._player = null;
    this._dealer = null;
    this._deck = null;
    this._playerWins = "Player Wins!";
    this._dealerWins = "Dealer Wins!";
    this._draw = "Draw!";
  }
  newGame = () => {
    this._deck = new Deck();
    this._player = new Hand();
    this._dealer = new DealerHand();
    this._deck.newDeck();
    this._deck.shuffleCards();

    this.drawPlayerCard();
    this.drawPlayerCard();
    this.drawDealerCard();
    this.drawDealerCard();
  };
  /*   displayRemainingCards = () => {
    let write = "";
    this._deck.cards.forEach(e => {
      write += `${e[0].symbol}`;
    });
    return `All cards: ${write}`;
  }; */
  drawPlayerCard = () => {
    return this._player.addCard(this._deck);
  };

  drawDealerCard = () => {
    return this._dealer.addCard(this._deck);
  };

  drawDealerCards = () => {
    while (this._dealer.stay == false && this._dealer.Result.score < 18) {
      this.drawDealerCard();
    }
  };

  getPlayerOutput = () => {
    let write = "";
    /* this._player._cards */
    this._player.Cards.forEach(e => {
      write += `${e[0].symbol}`;
    });
    return `<span>${write}</span> <span>${this._player.Result.score}</span>`;
  };

  getDealerOutput = () => {
    let write = "";
    /* this._dealer._cards */
    this._dealer.Cards.forEach(e => {
      write += `${e[0].symbol}`;
    });
    return `<span>${write}</span> <span>${this._dealer.Result.score}</span>`;
  };

  findWinner = playerStayed => {
    //playerStayed = false;
    let pr = this._player.Result.score;
    let dr = this._dealer.Result.score;

    if (playerStayed == true) {
      this._player._stay = playerStayed;
    }
    if (this._player.Result.isBust == true) {
      return this._dealerWins;
    } else if (this._dealer.Result.isBust) {
      return this._playerWins;
    } else if (this._player.Result.isBlackJack) {
      return this._playerWins;
    } else if (this._dealer.Result.isBlackJack) {
      return this._dealerWins;
    } else if (this._player._stay == true && dr > pr) {
      return this._dealerWins;
    } else if (this._player._stay == true && pr > dr) {
      return this._playerWins;
    } else if (this._player._stay == true && pr == dr) {
      return this._draw;
    } else {
      return "";
    }
  };
}
