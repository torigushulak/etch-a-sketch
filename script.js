// grid
const container = document.getElementById("container");

function makeGrid(squares) {
  container.style.setProperty('--grid-rows', squares);
  container.style.setProperty('--grid-cols', squares);
  for (i = 0; i < (squares * squares); i++) {
    let cell = document.createElement("cell");
    
    container.appendChild(cell).className = "grid-item";
    // mouseover event => makes cells change color
    cell.addEventListener("mouseover", function () {
      // console.log("Hey ho lets go")
      cell.style.backgroundColor = 'black';
    });
  };
};

makeGrid(16);

// button for squares per a side
const sizeButton = document.getElementById('button')

sizeButton.addEventListener("click", function () {
  let answer = prompt("Enter squares per a side");
  if (answer > 100) {
    answer = prompt("Cannot enter that many squares, please enter another amount.")
  }
  makeGrid(answer)
});


// reset button
const reset = document.getElementById("reset-button");
reset.addEventListener("click", function () {
  document.location.reload();
})




// $("grid-item").on("mouseover", function(){
//   $(this).css("background-color", "black");
// });

// random color generator
// const color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

// document.querySelector("cell").addEventListener("mouseover", function () {
//   document.querySelector("cell").style.background = color[Math.floor(Math.random() * color.length)];
// })

