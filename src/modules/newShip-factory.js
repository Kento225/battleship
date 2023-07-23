export class Ship {
  constructor(coords) {
    this.coords = coords;
    this.hits = 0;
    this.length = coords.length;
  }

  get isSunk() {
    if (this.hits >= this.length) {
      return true;
    } else {
      return false;
    }
  }
  hit() {
    this.hits++;
  }
}
