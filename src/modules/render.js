import { flow } from "../index";
export function controls(rotationCallback) {
  const rotationButtonArr = [];
  function changeRotation(rot) {
    rotationCallback(rot);
  }
  //adds rotation buttons to the DOM
  function addRotationButtons() {
    const rotationBtnX = createRotationButton("X", "x");
    const rotationBtnY = createRotationButton("Y", "y");
    document
      .querySelector(".place-button-container")
      .append(rotationBtnX, rotationBtnY);
    rotationButtonArr.push(rotationBtnX, rotationBtnY);
  }
  //function for creating rotation button elements
  function createRotationButton(label, rot) {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", () => changeRotation(rot));
    return button;
  }

  return {
    addRotationButtons,
  };
}

export function grid(placeFunc) {
  const squareArr = [];
  let highlightArr = [];
  let rotation = "x";
  let length = 5;
  let availableLengths = [4, 3, 3, 2];
  let currentLengthIndex = 0;
  let gridContainer = "";

  function setRotation(rot) {
    rotation = rot;
  }

  function createGrid(type, arr) {
    gridContainer = document.createElement("div");
    gridContainer.classList.add("div-container");
    if (type === "place") {
      document.querySelector(".place-ui").appendChild(gridContainer);
    }
    if (type === "display") {
      document.querySelector(".ai-side").appendChild(gridContainer);
    }
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
      if (type === "display") {
        console.log(arr);
        arr.forEach((element) => {
          console.log(element.x);
          if (
            element.x === +square.dataset.x &&
            element.y === +square.dataset.y
          ) {
            square.style.backgroundColor = "black";
          }
        });
      }
      if (type === "place") {
        square.addEventListener("mouseout", removeHighlight);
        square.addEventListener("mouseover", (e) => {
          highlightPlacement(e);
        });
        square.addEventListener("click", gridPlace);
      }

      gridContainer.appendChild(square);

      squareArr.push(square);
    }
    if (type === "place") {
      controls(setRotation).addRotationButtons();
    }
  }

  function highlightPlacement(e) {
    highlightArr = [];
    let opRotation = rotation === "y" ? "x" : "y";
    squareArr.forEach((element) => {
      if (
        +element.dataset[opRotation] === +e.target.dataset[opRotation] &&
        +element.dataset[rotation] >= +e.target.dataset[rotation] &&
        +element.dataset[rotation] < +e.target.dataset[rotation] + length &&
        element.dataset.status !== "placed" &&
        element.dataset.status !== "blocked"
      ) {
        highlightArr.push(element);
      }
    });
    if (e.target.dataset.status === "placed") {
      return;
    }
    //shows illegal placement
    if (
      highlightArr.length < length ||
      e.target.dataset.status === "placed" ||
      highlightArr.some((element) => {
        return (
          element.dataset.status === "placed" ||
          element.dataset.status === "blocked"
        );
      })
    ) {
      highlightArr = [];
      e.target.style.backgroundColor = "red";
      return;
    }
    //if mouse on legal placement squares, makes them grey
    highlightArr.forEach((element) => {
      element.style.backgroundColor = "grey";
      element.dataset.status = true;
    });
  }
  function removeHighlight() {
    squareArr.forEach((element) => {
      if (element.dataset.status === "placed") {
        return;
      }
      if (element.dataset.status === "blocked") {
        element.style.backgroundColor = "yellow";
        return;
      }
      element.style.backgroundColor = "yellow";
      element.dataset.status = "false";
    });
  }
  function gridPlace() {
    if (highlightArr.length === 0) {
      return;
    }
    const coords = [];

    highlightArr.forEach((element) => {
      element.style.backgroundColor = "black";
      element.dataset.status = "placed";
      coords.push({ x: element.dataset.x, y: element.dataset.y });
    });

    blockSquares();
    placeFunc(coords);
    changeLength();
    flow.placePhaseProgress();
  }
  //makes squares around placed ships blocked to placement
  function blockSquares() {
    squareArr.forEach((element) => {
      if (element.dataset.status === "placed") {
        squareArr.forEach((square) => {
          if (square.dataset.status !== "placed") {
            if (
              (+square.dataset.y === +element.dataset.y + 1 &&
                +square.dataset.x === +element.dataset.x) ||
              (+square.dataset.y === +element.dataset.y - 1 &&
                +square.dataset.x === +element.dataset.x) ||
              (+square.dataset.y === +element.dataset.y &&
                +square.dataset.x === +element.dataset.x + 1) ||
              (+square.dataset.y === +element.dataset.y &&
                +square.dataset.x === +element.dataset.x - 1)
            ) {
              square.dataset.status = "blocked";
            }
          }
        });
      }
    });
  }

  function changeLength() {
    length = availableLengths[currentLengthIndex];
    currentLengthIndex++;
  }
  return { createGrid, gridContainer };
}
