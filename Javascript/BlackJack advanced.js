const startButton = document.querySelector("#start-button");
const drawButton = document.querySelector("#draw-button");
const stayButton = document.querySelector("#stay-button");
const clearButton = document.querySelector("#clear-scoreboard-button");
const playerContent = document.querySelector("#player-content");
const dealerContent = document.querySelector("#dealer-content");
const resultContent = document.querySelector("#result-content");
const deckContent = document.querySelector("#deck-content");
const scoreboardContent = document.querySelector("#scoreboard-content");
const table = new Table();
const scoreboard = new ScoreBoard(scoreboardContent);
let playerStayed = false;

scoreboard.loadScoreBoard();

displayWinner = playerStayed => {
  let winner = table.findWinner(playerStayed);
  displayOutput(resultContent, winner);
  if (playerStayed == true) {
    scoreboard.addScore(playerContent, dealerContent, winner);
    //disableButtons();
  }
  return winner;
};

clearTable = () => {
  playerContent.innerHTML = "";
  dealerContent.innerHTML = "";
  resultContent.innerHTML = "";
  deckContent.innerHTML = "";
};

disableButtons = (start, draw, stay) => {
  if (!start.hasAttribute("disabled")) {
    start.setAttribute("disabled", "");
    draw.removeAttribute("disabled");
    stay.removeAttribute("disabled");
  } else if (start.hasAttribute("disabled")) {
    start.removeAttribute("disabled");
    draw.setAttribute("disabled", "");
    stay.setAttribute("disabled", "");
  } else {
    return;
  }
};

displayOutput = (htmlContainer, output) => {
  htmlContainer.innerHTML = output;
};

startButton.addEventListener("click", e => {
  clearTable();
  disableButtons(startButton, drawButton, stayButton);
  table.newGame();
  displayOutput(dealerContent, table.getDealerOutput());
  displayOutput(playerContent, table.getPlayerOutput());
  displayWinner();
  if (
    table.findWinner(playerStayed) == "Dealer Wins!" ||
    table.findWinner(playerStayed) == "Player Wins!"
  ) {
    const stay = true;
    disableButtons(startButton, drawButton, stayButton);
    table.drawDealerCards();
    displayOutput(dealerContent, table.getDealerOutput());
    displayWinner(stay);
  }
});
drawButton.addEventListener("click", e => {
  table.drawPlayerCard();
  displayOutput(playerContent, table.getPlayerOutput());
  displayWinner();
  if (table.findWinner(playerStayed) == "Dealer Wins!") {
    const stay = true;
    disableButtons(startButton, drawButton, stayButton);
    table.drawDealerCards();
    displayOutput(dealerContent, table.getDealerOutput());
    displayWinner(stay);
  }
});
stayButton.addEventListener("click", e => {
  const stay = true;
  disableButtons(startButton, drawButton, stayButton);
  table.drawDealerCards();
  displayOutput(dealerContent, table.getDealerOutput());
  displayWinner(stay);
});
clearButton.addEventListener("click", e => {
  scoreboard.clearScoreboard();
});
