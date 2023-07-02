const page = document.getElementById('page');
const container = document.getElementById('container');

function makeGrid(n) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  
  const squareSize = Math.floor(Math.min(containerWidth / n, containerHeight / n));
  
  for (let rows = 0; rows < n; rows++) {
    const row = document.createElement("div");
    row.className = "row";
    
    for (let columns = 0; columns < n; columns++) {
      const cell = document.createElement("div");
      cell.className = "gridsquare";
      cell.style.width = squareSize + "px";
      cell.style.height = squareSize + "px";
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
};
  
  makeGrid(56);