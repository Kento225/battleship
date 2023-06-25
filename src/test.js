const newShip = require("./modules/newShip-factory");
const gameBoard = require("./modules/gameBoard-factory");

test("newShip works", () => {
  const testShip = newShip(1, 1, 4, "y");
  expect(testShip.length).toBe(4);
  testShip.hit(4);
  expect(testShip.hits).toBe(4);
  expect(testShip.y).toStrictEqual([1, 2, 3, 4]);
  expect(testShip.isSunk()).toBe(true);
});

test("gameBoard works", () => {
  const testBoard = gameBoard();
  testBoard.placeShip(1, 1, 2, "x");
  expect(testBoard.shipArray[0].x).toStrictEqual([1, 2]);
  expect(testBoard.shipArray[0].y).toStrictEqual([1]);
  expect(testBoard.shipArray[0].length).toBe(2);
  testBoard.receiveAttack(1, 1);
  expect(testBoard.shipArray[0].hits).toBe(1);
  testBoard.receiveAttack(3, 3);
  expect(testBoard.missedArray).toStrictEqual([
    {
      x: 3,
      y: 3,
    },
  ]);
  testBoard.receiveAttack(4, 4);
  expect(testBoard.missedArray).toStrictEqual([
    {
      x: 3,
      y: 3,
    },
    {
      x: 4,
      y: 4,
    },
  ]);
});
