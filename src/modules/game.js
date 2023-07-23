import * as placeUI from "../UI/place-ui";
import { addAttackUI } from "../UI/attack-ui";
import { grid } from "./render";
import { humanPlayer } from "./players";
import { AIPlayer } from "./players";
export function gameFlow() {
  let timesPlaced = 0;

  const placePhase = function () {
    placeUI.addPlaceUI();
    grid().createGrid("place");
    AIPlayer.AIPlace();
    console.log(AIPlayer.board.shipArray);
  };

  const attackPhase = function () {
    placeUI.removePlaceUI();
    addAttackUI();
    grid().createGrid("display");
    grid().createGrid("attack");
  };

  function placePhaseProgress() {
    timesPlaced++;
    if (timesPlaced === 5) {
      attackPhase();
    }
  }

  return { placePhase, attackPhase, placePhaseProgress };
}

gameFlow().placePhase();
