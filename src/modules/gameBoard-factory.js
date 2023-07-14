import { newShip } from "./newShip-factory";
import { grid } from "./render";

export function gameBoard() {
  const shipArray = [];
  const missedArray = [];

  const placeShip = function (coords) {
    shipArray.push(newShip(coords));
  };
  const receiveAttack = function (x, y) {};
  const allSunk = function () {
    for (i = 0; i < shipArray.length; i++) {
      if (!shipArray.isSunk) {
        return false;
      } else {
        return true;
      }
    }
  };

  const domGrid = grid(placeShip);

  function addDomPlaceGrid() {
    domGrid.createGrid("place");
  }
  function addDomDisplayGrid() {
    domGrid.createGrid("display", shipArray);
  }

  return {
    placeShip,
    receiveAttack,
    allSunk,
    shipArray,
    missedArray,
    addDomPlaceGrid,
    addDomDisplayGrid,
    domGrid,
  };
}
