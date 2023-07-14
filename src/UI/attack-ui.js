export function addAttackUI() {
  const body = document.querySelector("body");

  const attackUI = document.createElement("div");
  attackUI.classList.add("attack-ui");

  const AISide = document.createElement("div");
  AISide.classList.add("ai-side");
  attackUI.appendChild(AISide);

  const playerSide = document.createElement("div");
  playerSide.classList.add("player-side");
  attackUI.appendChild(playerSide);

  body.appendChild(attackUI);
}
