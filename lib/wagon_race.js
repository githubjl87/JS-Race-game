// TODO: write your code here
function move(player) {
  const car = document.querySelector(`#player${player}-race .active`);
  const nextCell = car.nextElementSibling;

  if (nextCell) {
    if (nextCell.classList.contains("finish")) {
      alert(`Player ${player} wins! Play again?`);
      window.location.reload();
    } else {
      nextCell.classList.add("active");
      car.classList.remove("active");
    }
  }
}

function movecar(e) {
  if (e.key === "q") {
    move(1);
  } else if (e.key === "p") {
    move(2);
  }
}

function restartPage() {
  console.log("Restart button clicked");

  window.location.reload();
}


document.addEventListener("keyup", movecar);

const restart = document.querySelector("button");
restart.addEventListener('click', restartPage);
