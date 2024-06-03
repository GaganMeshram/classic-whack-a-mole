const grid = document.querySelector(".grid");
const info = document.querySelector(".info");
const span = document.querySelector(".score");
const lastScoreSpan = document.querySelector(".lastScore");

let gameOver = false;
let score = 0;
let lastScore;

let moleCell;
let dangerCell;

function createGrid() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i;
    cell.addEventListener("click", function (e) {
      if (e.target.classList.contains("mole")) {
        score += 10;
        span.innerHTML = score;
      } else if (e.target.classList.contains("danger")) {
        info.innerHTML = "GAME OVER";
        gameOver = true;
      }
    });
    grid.appendChild(cell);
  }
}
createGrid();

function randomNumber() {
  let num = Math.floor(Math.random() * 9);
  return num;
}

function randomMole(e) {
  if (gameOver) {
    return;
  }

  if (moleCell) {
    moleCell.classList.remove("mole");
  }
  let num = randomNumber();

  if (dangerCell && dangerCell.className == "danger") {
    return;
  }
  moleCell = document.getElementById(num);
  moleCell.classList.add("mole");
}
setInterval(randomMole, 1000);

function randomDangerMole() {
  if (gameOver) {
    return;
  }

  if (dangerCell) {
    dangerCell.classList.remove("danger");
  }
  let num = randomNumber();
  if (moleCell && moleCell.className == "mole") {
    moleCell.addEventListener("click", () => alert("vbnm"));
    return;
  }
  dangerCell = document.getElementById(num);
  dangerCell.classList.add("danger");
}
setInterval(randomDangerMole, 3000);
