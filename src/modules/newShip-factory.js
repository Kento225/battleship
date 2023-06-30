const newShip = (coords, x, y) => {
  this.length = coords.length;
  const hits = 0;

  const isSunk = function () {
    if (this.hits >= this.length) {
      return true;
    } else {
      return false;
    }
  };
  const hit = function (amount) {
    this.hits += amount;
  };
  const console = function () {
    return this.hits;
  };
  return { x, y, length, hits, isSunk, hit, console };
};

module.exports = newShip;
