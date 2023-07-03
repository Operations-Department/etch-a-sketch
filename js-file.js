const page = document.getElementById('page');
const container = document.getElementById('container');
const color = document.getElementById('color');
const rainbowMode = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const scale = document.getElementById('scale');
const scaleValue = document.getElementById('scale-value');

function makeGrid(n) {
  //gets the height and width of the container
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  
  //divides the container height and width by 'n', chooses the smaller of the two,
  //and rounds that number down to the whole number
  const squareSize = Math.floor(Math.min(containerWidth / n, containerHeight / n));
  
  //generates rows
  for (let rows = 0; rows < n; rows++) {
    const row = document.createElement("div");
    row.className = "row";
    
    //generates columns
    for (let columns = 0; columns < n; columns++) {
      const cell = document.createElement("div");
      cell.className = "gridsquare";
      
      //sets the height and width of each square in pixels
      cell.style.width = squareSize + "px";
      cell.style.height = squareSize + "px";
      
      //adds the div into each row yielding a column
      row.appendChild(cell);
    }
    //add the rows with cells(columns) inside to the container
    container.appendChild(row);
  }
};

//draw 
container.addEventListener('mousedown', function(event) {
  container.addEventListener('mousemove', function(event) {
    if (event.target.classList.contains('gridsquare') && event.buttons === 1) {
      event.target.style.backgroundColor = "black";
    }
  });
});

//clears back to a white grid  
clear.addEventListener('click', function() {
  const cells = container.querySelectorAll('.gridsquare');
  cells.forEach(function(cell) {
    cell.style.backgroundColor = 'white';
  });
});


makeGrid(50);