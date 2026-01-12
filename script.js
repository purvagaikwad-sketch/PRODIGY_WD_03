let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const statusText = document.getElementById("status");

function play(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.innerText = board[a] + " Wins!";
      gameOver = true;
      return;
    }
  }

  if (!board.includes("")) {
    statusText.innerText = "It's a Draw!";
    gameOver = true;
  }
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  statusText.innerText = "";
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}
