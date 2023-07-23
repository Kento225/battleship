import { Ship } from "./newShip-factory";

export class GameBoard {
  constructor() {
    this.shipArray = [];
    this.hitArray = [];
  }

  set addShip(coords) {
    this.shipArray.push(new Ship(coords));
  }

  receiveAttack(e, gridAttackRender, renderSunken) {
    if (
      //checks if attacked squared hasnt already been attacked
      this.hitArray.some(
        (item) => item.x === e.target.dataset.x && item.y === e.target.dataset.y
      )
    ) {
      return;
    }
    //checks ships in shipArray against clicked square coords for a hit
    this.shipArray.forEach((ship) => {
      ship.coords.forEach((coord, index, arr) => {
        if (
          +e.target.dataset.x === +coord.x &&
          +e.target.dataset.y === +coord.y
        ) {
          ship.hit();
          if (ship.isSunk) {
            renderSunken(ship);
          }
          gridAttackRender(true, e);
        }
        if (index === arr.length - 1) {
          if (e.target.dataset.status !== "hit") {
            gridAttackRender(false, e);
          }
        }
      });
    });
    this.hitArray.push({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });
  }

  allSunk() {
    for (i = 0; i < shipArray.length; i++) {
      if (!shipArray.isSunk) {
        return false;
      } else {
        return true;
      }
    }
  }
}
