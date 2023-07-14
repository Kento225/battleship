export function newShip(coords) {
  coords: coords;
  length: coords.length;
  const hits = 0;

  const isSunk = function () {
    if (this.hits >= this.length) {
      return true;
    } else {
      return false;
    }
  };
  const hit = function () {
    this.hits++;
  };
  const console = function () {
    return this.hits;
  };
  return { coords, isSunk, hit, console };
}
