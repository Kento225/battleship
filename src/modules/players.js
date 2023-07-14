import { gameBoard } from "./gameBoard-factory";

export function player() {
  const board = gameBoard();

  const AI_SHIPS = [
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
      { x: "7", y: "2" },
      { x: "8", y: "2" },
      { x: "9", y: "2" },
    ],
    [
      { x: "4", y: "5" },
      { x: "5", y: "5" },
    ],
  ];

  const addPlaceGrid = board.addDomPlaceGrid;
  const addDisplayGrid = board.addDomDisplayGrid;

  const AIPlace = function () {
    AI_SHIPS.forEach((element) => board.placeShip(element));
  };

  const AIattack = function (enemy) {};
  const playerAttack = function (enemy) {};

  return { AIPlace, addPlaceGrid, addDisplayGrid, board };
}
