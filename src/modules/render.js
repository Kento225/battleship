const grid = function (length, rotation) {
  const squareArr = [];

  const createGrid = function (type) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("div-container");
    document.querySelector("body").appendChild(gridContainer);
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

      if (type === "place") {
        square.addEventListener("mouseout", removeHighlight);
        square.addEventListener("mouseover", (e) => {
          highlightPlacement(e);
          square.addEventListener("click", gridPlace);
        });
      }

      gridContainer.appendChild(square);

      squareArr.push(square);
    }
  };

  const highlightPlacement = function (e) {
    const highlightArr = [];
    console.log(e.target.dataset);
    let opRotation = rotation === "y" ? "x" : "y";
    squareArr.forEach((element) => {
      if (
        +element.dataset[opRotation] === +e.target.dataset[opRotation] &&
        +element.dataset[rotation] >= +e.target.dataset[rotation] &&
        +element.dataset[rotation] < +e.target.dataset[rotation] + length &&
        element.dataset.isHighlighted !== "placed"
      ) {
        highlightArr.push(element);
      }
    });
    if (e.target.dataset.isHighlighted === "placed") {
      return;
    }
    if (
      highlightArr.length < length ||
      e.target.dataset.isHighlighted === "placed" ||
      highlightArr.some((element) => {
        element.dataset.isHighlighted === "placed";
      })
    ) {
      e.target.style.backgroundColor = "red";
      return;
    }
    highlightArr.forEach((element) => {
      element.style.backgroundColor = "grey";
      element.dataset.isHighlighted = true;
    });
    console.log(checkHighlighted(highlightArr));
  };
  const removeHighlight = function () {
    squareArr.forEach((element) => {
      if (element.dataset.isHighlighted === "placed") {
        return;
      }
      element.style.backgroundColor = "yellow";
      element.dataset.isHighlighted = false;
    });
  };
  const gridPlace = function () {
    squareArr.forEach((element) => {
      if (element.dataset.isHighlighted === "true") {
        element.style.backgroundColor = "black";
        element.dataset.isHighlighted = "placed";
      }
    });
  };

  const checkHighlighted = function (highlightArr) {
    for (let i = 0; i < highlightArr.length; i++) {
      console.log(highlightArr[i]);
      if (highlightArr[i].dataset.isHighlighted === "placed") {
        return true;
      } else {
      }
    }
  };

  return { createGrid };
};
module.exports = grid;
