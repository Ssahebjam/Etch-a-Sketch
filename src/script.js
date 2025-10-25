const board = document.getElementById("board");
const resetBtn = document.getElementById("resetBtn");

function makeBoard(num, board) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");

      square.classList.add("square");
      square.style.width = `${980 / num}px`;
      square.style.height = `${980 / num}px`;

      board.appendChild(square);
    }
  }
}

function paintOnBoard(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "red";
  }
}

function resetBoard() {
  board.textContent = "";
}

makeBoard(16, board);

board.addEventListener("mouseover", paintOnBoard);

let gridNum;

resetBtn.addEventListener("click", () => {
  do {
    gridNum = prompt("enter you'r number");
  } while (gridNum > 100 || gridNum <= 0);
  resetBoard();
  makeBoard(gridNum, board);
});
