const newShip = (x, y, length, rotation) => {
  length;
  x = [x];
  y = [y];
  const hits = 0;

  for (i = 0; i < length - 1; i++) {
    if (rotation === "y") {
      y.push(y[i] + 1);
    } else if (rotation === "x") {
      x.push(x[i] + 1);
    }
  }

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
