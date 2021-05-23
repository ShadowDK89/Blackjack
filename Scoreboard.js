class ScoreBoard {
  constructor(scoreboard) {
    this._scoreboard = scoreboard;
    /*   */
  }
  addScore(playerScore, dealerScore, winnerInfo) {
    let color = null;
    let tr = document.createElement("tr");
    let score = this._scoreboard.innerHTML;
    if (winnerInfo == "Player Wins!") {
      color = "text-success";
    } else if (winnerInfo == "Dealer Wins!") {
      color = "text-danger";
    } else if (winnerInfo == "Draw!") {
      color = "text-warning";
    }
    this._scoreboard.innerHTML += tr.innerHTML = `<td>${playerScore.children[0].innerHTML} = ${playerScore.children[1].innerHTML}</td><td>${dealerScore.children[0].innerHTML} = ${dealerScore.children[1].innerHTML}</td><td class="${color}">${winnerInfo}</td>`;
    localStorage.scoreboard = this._scoreboard.innerHTML;
  }

  loadScoreBoard() {
    if (localStorage.scoreboard !== undefined) {
      this._scoreboard.innerHTML = localStorage.scoreboard;
    }
  }

  clearScoreboard() {
    localStorage.clear();
    this._scoreboard.innerHTML = "";
  }
}
