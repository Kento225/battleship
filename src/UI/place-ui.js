export function addPlaceUI() {
  const body = document.querySelector("body");

  const placeUI = document.createElement("div");
  placeUI.classList.add("place-ui");

  const placeShipText = document.createElement("h1");
  placeShipText.textContent = "Place your ships";
  placeUI.appendChild(placeShipText);

  const buttonCont = document.createElement("div");
  buttonCont.classList.add("place-button-container");
  const rotationText = document.createElement("p");
  rotationText.textContent = "Rotation :";
  buttonCont.appendChild(rotationText);
  placeUI.appendChild(buttonCont);

  body.appendChild(placeUI);
}
export function removePlaceUI() {
  document.querySelector(".place-ui").remove();
}
