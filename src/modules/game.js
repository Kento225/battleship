import * as placeUI from "../UI/place-ui";
import { addAttackUI } from "../UI/attack-ui";
import { player } from "./players";

export function gameFlow() {
  let timesPlaced = 0;

  const HumanPlayer = player();
  const AIPlayer = player();

  AIPlayer.AIPlace();

  const placePhase = function () {
    placeUI.addPlaceUI();
    HumanPlayer.addPlaceGrid();
  };

  const attackPhase = function () {
    placeUI.removePlaceUI();
    addAttackUI();
    HumanPlayer.addDisplayGrid();
  };

  function placePhaseProgress() {
    timesPlaced++;
    if (timesPlaced === 5) {
      gameFlow().attackPhase();
    }
  }

  return { placePhase, attackPhase, placePhaseProgress };
}

gameFlow().placePhase();
