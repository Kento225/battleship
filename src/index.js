import gameBoard from "./modules/gameBoard-factory";
import "./style.css";
import { gameFlow } from "./modules/game";
import { humanPlayer } from "./modules/players";

export const flow = gameFlow();
