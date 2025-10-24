const board = document.getElementById("board");

function makeBoard(num, board) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");

      square.classList.add("square");
      board.appendChild(square);
    }
  }
}

makeBoard(16, board);
