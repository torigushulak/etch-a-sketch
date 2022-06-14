// 16x16 grid
const container = document.getElementById("container");

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("cell");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);

// hovering event 
cell.addEventListener("hover", function(){

});
