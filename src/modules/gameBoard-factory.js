const newShip = require("./newShip-factory");

const gameBoard = () => {
  const shipArray = [];
  const missedArray = [];

  const placeShip = function (x, y, length, rotation) {
    shipArray.push(newShip(x, y, length, rotation));
  };
  const receiveAttack = function (x, y) {
    for (i = 0; i < shipArray.length; i++) {
      if (shipArray[i].y.includes(y) && shipArray[i].x.includes(x)) {
        shipArray[i].hits += 1;
      } else
        missedArray.push({
          x: x,
          y: y,
        });
    }
  };
  const allSunk = function () {
    for (i = 0; i < shipArray.length; i++) {
      if (!shipArray.isSunk) {
        return false;
      } else {
        return true;
      }
    }
  };
  return { placeShip, receiveAttack, allSunk, shipArray, missedArray };
};

module.exports = gameBoard;