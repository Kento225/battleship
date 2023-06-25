const gameBoard = require("./gameBoard");

const player = (type) => {
  const board = gameBoard();

  const length = [5, 4, 3, 3, 2];
  const i = 0;

  const place = function (enemy) {
    for (i = 0; i < length; i++) {
      if (type === "cpu") {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        const rotation = Math.floor(Math.random() * 2) === 0 ? "y" : "x";
        enemy.board.placeShip(randomX, randomY, length[i], rotation);
      }
    }
    if (type === "human") {
    }
  };
};
