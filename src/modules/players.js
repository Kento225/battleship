import { GameBoard } from "./gameBoard-factory";

export class Player {
  constructor() {
    this.board = new GameBoard();
    this.AI_SHIPS = [
      [
        { x: "2", y: "9" },
        { x: "3", y: "9" },
        { x: "4", y: "9" },
        { x: "5", y: "9" },
        { x: "6", y: "9" },
      ],
      [
        { x: "8", y: "6" },
        { x: "8", y: "5" },
        { x: "8", y: "4" },
        { x: "8", y: "3" },
      ],
      [
        { x: "1", y: "3" },
        { x: "1", y: "2" },
        { x: "1", y: "1" },
      ],
      [
        { x: "7", y: "1" },
        { x: "8", y: "1" },
        { x: "9", y: "1" },
      ],
      [
        { x: "4", y: "5" },
        { x: "5", y: "5" },
      ],
    ];
  }
  set placeShip(coords) {
    this.board.addShip = coords;
  }
  AIPlace() {
    this.AI_SHIPS.forEach((element) => {
      this.board.addShip = element;
    });
  }
  playerAttack(e, gridAttackRender, renderSunken) {
    AIPlayer.board.receiveAttack(e, gridAttackRender, renderSunken);
    AIPlayer.AIAttack();
  }

  hitY = "";
  hitX = "";
  toAttackY = Math.floor(Math.random() * 10) + 1;
  toAttackX = Math.floor(Math.random() * 10) + 1;
  option = "";
  firstHitX = "";
  firstHitY = "";
  foundDirection = "";
  tries = 0;
  toTryX = [];
  toTryY = [];
  toTryIndex = 3;

  getRandomCoords() {
    this.toAttackY = Math.floor(Math.random() * 10) + 1;
    this.toAttackX = Math.floor(Math.random() * 10) + 1;

    let displayGridArr = Array.from(
      document.querySelector("#display-grid").childNodes
    );

    displayGridArr = displayGridArr.filter(
      (square) => square.textContent === ""
    );

    const squareToAttack = displayGridArr.find((square) => {
      return (
        +square.dataset.x === this.toAttackX &&
        +square.dataset.y === this.toAttackY
      );
    });
    if (squareToAttack === undefined) {
      this.getRandomCoords();
    }
  }

  findDirectionToAttack(tries) {
    switch (tries) {
      case 1:
        this.toAttackX = this.firstHitX + 1;
        this.tries = 2;
        this.foundDirection = "x+";
        break;
      case 2:
        this.toAttackX = this.firstHitX - 1;
        this.tries = 3;
        this.foundDirection = "x-";
        break;
      case 3:
        this.toAttackY = this.firstHitY + 1;
        this.tries = 4;
        this.foundDirection = "y+";
        break;
      case 4:
        this.toAttackY = this.firstHitY - 1;
        this.tries = 0;
        this.foundDirection = "y-";
        break;
    }
    // if (this.toAttackX > 10) {
    //   this.toAttackX = this.firstHitX - tries + 1;
    //}
    //if (this.toAttackX < 1) {
    //  this.toAttackX = this.firstHitX + tries + 1;
    // }
    // if (this.toAttackY > 10) {
    //   this.toAttackY = this.firstHitY - tries + 1;
    // }
    // if (this.toAttackY < 1) {
    //   this.toAttackY = this.firstHitY + tries + 1;
    // }
  }
  AIAttack() {
    console.log(`x: ${this.toAttackX} y: ${this.toAttackY}`);
    let displayGridArr = Array.from(
      document.querySelector("#display-grid").childNodes
    );

    displayGridArr = displayGridArr.filter(
      (square) => square.textContent == ""
    );

    if (
      humanPlayer.board.hitArray.some((hit) => {
        hit.x === this.toAttackX && hit.y === this.toAttackY;
      })
    ) {
      this.getRandomCoords();
      this.AIAttack();
      return;
    }
    if (
      this.toAttackX > 10 ||
      this.toAttackX < 1 ||
      this.toAttackY > 10 ||
      this.toAttackY < 1
    ) {
      this.getRandomCoords();
      this.AIAttack();

      return;
    }

    const squareToAttack = displayGridArr.find((square) => {
      return (
        +square.dataset.x === this.toAttackX &&
        +square.dataset.y === this.toAttackY
      );
    });
    if (squareToAttack === undefined) {
      this.getRandomCoords();
      this.AIAttack();

      return;
    }

    const shipToAttack = humanPlayer.board.shipArray.find((ship) => {
      for (const coord of ship.coords) {
        if (+coord.x === this.toAttackX && +coord.y === this.toAttackY) {
          return true;
        }
      }
      return false;
    });

    if (shipToAttack !== undefined) {
      squareToAttack.textContent = "🔴";
      humanPlayer.board.hitArray.push({
        x: this.toAttackX,
        y: this.toAttackY,
      });

      if (this.tries < 4) {
        this.findDirectionToAttack(this.tries);
      }
      if (this.tries === 0) {
        this.tries = 1;
        this.firstHitX = this.toAttackX;
        this.firstHitY = this.toAttackY;
        this.findDirectionToAttack(this.tries);
      }
    } else {
      squareToAttack.textContent = "⚫️";
      humanPlayer.board.hitArray.push({
        x: this.toAttackX,
        y: this.toAttackY,
      });
      this.findDirectionToAttack(this.tries);
      if (this.tries > 0) {
        this.findDirectionToAttack(this.tries);
      }
      if (this.tries > 4) {
        this.tries = 0;
      }
      if (this.tries === 0) {
        this.getRandomCoords();
      }
    }

    console.log(squareToAttack);
  }
}

export const humanPlayer = new Player();
export const AIPlayer = new Player();
