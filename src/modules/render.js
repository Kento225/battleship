export function render() {
  const grid = function () {
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("div-container");
    body.appendChild(gridContainer);
    const squareArr = [];
    let y = 10;
    let x = 1;
    for (let i = 0; i < 100; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.x = x;
      square.dataset.y = y;
      x += 1;
      if (square.dataset.x % 10 === 0) {
        y -= 1;
      }
      if (square.dataset.x >= 10) {
        x = 1;
      }
      gridContainer.appendChild(square);
      squareArr.push(square);
    }
    return { gridContainer, squareArr };
  };
  return { grid };
}
