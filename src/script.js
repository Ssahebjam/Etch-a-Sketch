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

function paintBoard(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "red";
  }
}

makeBoard(16, board);

board.addEventListener("mouseover", paintBoard);
